import { renderComponent, expect } from '../testHelper';
import MessageBar from '../../src/client/components/MessageBar';

describe('MessageBar', () => {
	let component;

	beforeEach(() => {
		component = renderComponent(MessageBar)
	});

	it('has a selector', () => {
		expect(component.find('select')).to.exist
	});

	it('has a selector with a value of home', () => {
		expect(component.find('select')).to.have.value('home')
	});

	it('has a form', () => {
		expect(component.find('form')).to.exist
	});

	describe('entering some text', () => {
		beforeEach(() => {
			component.find('input').simulate('change', 'power comment')
		})

		it('shows entered text', () => {
			expect(component.find('input')).to.have.value('power comment')
		})

	})
})
