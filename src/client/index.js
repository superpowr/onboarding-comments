import React                  from 'react';
import { Provider }           from 'react-redux';
import Application            from './reducers';
import { ReactDOM,
         render }             from 'react-dom';
import { createStore,
         applyMiddleware,
         combineReducers }    from 'redux';
import { Router,
         Route,
         browserHistory,
         IndexRoute }         from 'react-router'

import reduxThunk             from 'redux-thunk';

import {

} from 'Actions';


import App                   from 'Containers/ApplicationContainer'




const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

render(
  <Provider store={createStoreWithMiddleware(Application)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app-container')
)
