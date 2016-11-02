import React from 'react';
import {render, mount, shallow} from 'enzyme';
import expect from 'expect';
import Text from './';

describe('Select', () => {

    it('Render Select', () => {
        const wrapper = shallow(
            <Text
                className='text-field-test'
                onChange={(() => '')}
                onEnter={(() => '')}
                placeholder='Input Text'
                value='a'
            />
        );
        expect(wrapper.find('.text-field').prop('value')).toEqual('a');
        expect(wrapper.find('.text-field').hasClass('text-field-test')).toEqual(true);
    });
});