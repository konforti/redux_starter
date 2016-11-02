import React from 'react';
import {render, mount, shallow} from 'enzyme';
import expect from 'expect';
import SvgIcon from './';

describe('SvgIcon', () => {

    it('Render SvgIcon', () => {
        const wrapper = shallow(
            <SvgIcon
                path='svg_path'
                className='icon'
                viewBox='0 0 24 24'
                height='24'
                width='24'
            />
        );
        expect(wrapper.find('path').length).toEqual(1);
        expect(wrapper.find('path').prop('d')).toEqual('svg_path');
        expect(wrapper.find('svg').hasClass('icon')).toEqual(true);
    });
});