const initialState = {
  comments: []
};

const Application = (state=initialState, action) =>  {
  switch (action.type) {
    case 'SET_COMMENTS':
      return {
        ...state,
        comments: action.comments
      }
      case 'ADD_COMMENT':
      return {
        ...state,
        comments: [
          ...state.comments,
          { text: action.comment }
        ]
      }
    default:
      return state
  }
}
export default Application;
