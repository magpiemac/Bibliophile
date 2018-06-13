export default (state = {
  title: '',
  author: ' ',
  notes: ' ',
  status: ' ',
  img_url: ' '
}, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.BookFormData

    default:
      return state;
  }
}
