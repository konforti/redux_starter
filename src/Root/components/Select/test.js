import React from 'react';
import {render, mount, shallow} from 'enzyme';
import expect from 'expect';
import Select from './';

describe('Select', () => {

    it('Render Select', () => {
        const wrapper = shallow(
            <Select
                options={['a','b','c']} 
                defaultValue='a'
                id='1' 
                className='selector' 
                onChange={(v) => v}
                label='Selector'
            />
        );
        expect(wrapper.find('label').text()).toEqual('Selector');
        expect(wrapper.find('select').prop('value')).toEqual('a');
        expect(wrapper.find('select').hasClass('select-field')).toEqual(true);
        expect(wrapper.find('select').hasClass('selector')).toEqual(true);
        expect(wrapper.find('option').length).toEqual(3);
    });
});