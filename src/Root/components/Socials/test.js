import Button from './index';
import React from 'react';
import {render, mount, shallow} from 'enzyme';
import expect from 'expect';

window.describe('Button', () => {

    window.it('Render Button', () => {
        const wrapper = shallow(
            <Button
                text='Click Me' 
                className='special-button'
                onClick={(v) => v}
            />
        );
        expect(wrapper.find('.button').length).toEqual(1);
        expect(wrapper.find('.button').hasClass('special-button')).toEqual(true);
        expect(wrapper.find('.button').text()).toEqual('Click Me');
    });
});