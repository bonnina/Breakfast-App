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