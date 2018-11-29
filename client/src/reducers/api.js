const api = (state = {}, action) => {
  switch (action.type) {
    case 'POST_ORDER':
      return {
        ...state,
        data: action.formData
      }
    case 'POST_SUCCESS':
      return {
        ...state,
        sucess: action.result
      }
    case 'POST_FAILURE':
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
}

export default api;