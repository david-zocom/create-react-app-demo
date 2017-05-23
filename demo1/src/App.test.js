import React from 'react';
//import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
	test('renders without crashing', () => {
		//const div = document.createElement('div');
		//ReactDOM.render(<App />, div);
		shallow(<App/>);
	});

	test('renders heading', () => {
		// <h2>Welcome to React</h2>
		let wrapper = shallow(<App/>);
		let actual = wrapper.contains(<h2>Welcome to React</h2>);
		let expected = true;
		expect(actual).toBe(expected);
	})
})
