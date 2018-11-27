const order = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_ORDER':
      return [
        ...state, 
        action.item
      ]
    case 'REMOVE_FROM_ORDER':
      return state.filter(el => el.text !== action.item.text)
    case 'DELETE_ORDER':
      return []
    default:
      return state;
  }
}

export default order;