class Api::BooksController < ApplicationController
  before_action :set_book, only: [:show, :update, :destroy]

  # GET /books
  def index
    render json: Book.all
  end

  # GET /books/1
  def show
    render json: @book
  end

  # POST /books
  def create
    book = Book.new(book_params)

    if book.save
      render json: book, status: :created
    else
      render json: { message: book.errors }, status: 400
    end
  end

  # PATCH/PUT /books/1
  def update
    if @book.update(book_params)
      render json: @book
    else
      render json: @book.errors, status: 400
    end
  end

  # DELETE /books/1
  def destroy
    @book.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find_by(id: params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def book_params
      params.permit(:book, :id, :title, :author, :notes, :status, :img_url)
    end
end
