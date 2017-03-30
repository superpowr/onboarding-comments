import { renderComponent, expect } from '../testHelper';
import Header from '../../src/client/components/Header';

describe('Header', () => {
	let component;

	beforeEach(() => {
		component = renderComponent(Header)
	});

	it('has a class of header', () => {
		expect(component.find('div')).to.exist
	})
})
