export const location = option => ({
  type: 'ADD_LOCATION',
  option
})

export const addToOrder = item => ({
  type: 'ADD_TO_ORDER',
  item
})

export const removeFromOrder = item => ({
  type: 'REMOVE_FROM_ORDER',
  item
})

export const deleteOrder = () => ({
  type: 'DELETE_ORDER'
})

export const postOrder = formData => ({
  type: 'POST_ORDER',
  formData
})

export const postSuccess = result => ({
  type: 'POST_SUCCESS',
  result
})

export const postFailure = error => ({
  type: 'POST_FAILURE',
  error
})