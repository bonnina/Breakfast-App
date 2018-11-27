const details = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      return {
        ...state,
        location: action.option
      }
    default:
      return state;
  }
}

export default details;