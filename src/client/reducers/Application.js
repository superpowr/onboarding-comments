const initialState = {
    TOTALLY_SILLY_STATE:'Hello World'
};
const Application = (state=initialState, action) =>  {
  switch (action.type){
  case 'SOMETHING':
    return state;
  default:
      return state
  }
}
export default Application;
