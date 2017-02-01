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
    default:
      return state
  }
}
export default Application;
