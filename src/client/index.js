import React                  from 'react';
import { Provider }           from 'react-redux';
import Application            from 'Reducers/Application';
import Promise                from 'promise-polyfill';
import { ReactDOM,
         render }             from 'react-dom';
import { createStore,
         applyMiddleware,
         combineReducers }    from 'redux';
import { Router,
         Route,
         browserHistory,
         hashHistory,
         IndexRoute }         from 'react-router'

import {
  syncHistoryWithStore,
  routerReducer }             from 'react-router-redux'

import {

} from 'Actions';

import thunk from 'redux-thunk';

import App                   from 'Containers/ApplicationContainer'

const store = createStore(
  combineReducers({
    Application,
    routing: routerReducer
  }),
  applyMiddleware(thunk)
);

const history = syncHistoryWithStore(hashHistory, store);

(function() {
    // window.debug = true;
    window.Promise = window.Promise || Promise; //Promise polyfill
    if(window.debug){
        console.log = function(){};
    }
}());


render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app-container')
)
