import 'whatwg-fetch';

//Actions file
// export default sillyAction;

// function sillyAction(){
    // return {
        // type:'SILLY_ACTION'
    // }
// }

// action creator ?
export function getComments() {
  return (dispatch) => {
    // return fetch('/comments', { credentials: 'same-origin' }).then((res) => {
    return fetch('/comments').then((res) => {
        return res.json();
      }).then((body) => {
        dispatch(setComments(body.comments))
    });
  }
}

function setComments(comments) {
  return { type: 'SET_COMMENTS', comments: comments }
}