//Action Creators
export const updateBookFormData = bookFormData => {
  return {
    type: 'UPDATED_DATA',
    bookFormData
  }
}

export const resetSurfboardForm = () => {
  return {
    type: 'RESET_SURFBOARD_FORM'
  }
}
