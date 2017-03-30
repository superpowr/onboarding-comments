import jsdom from 'jsdom';
import jquery from 'jquery';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import chaiJquery from 'chai-jquery';
import reducers from '../src/client/reducers';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);

function renderComponent(ComponentClass, props, state ) {
	const componentInstance = TestUtils.renderIntoDocument(
		<Provider store={createStore(reducers, state)}>
			<ComponentClass {...props}/>
		</Provider>
	)
	return $(ReactDOM.findDOMNode(componentInstance));
}

$.fn.simulate = function(eventName, value) {
	if(value) {
		this.val(value);
	}
	TestUtils.Simulate[eventName](this[0])
}

chaiJquery(chai, chai.util, $);

export { renderComponent, expect };