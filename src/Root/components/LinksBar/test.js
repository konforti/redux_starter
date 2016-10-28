import React from 'react';
import {render, mount, shallow} from 'enzyme';
import expect from 'expect';
import {LinksBar} from './';

window.describe('<LinksBar />', () => {

    window.it('Render LinksBar', () => {
        const wrapper = shallow(
            <LinksBar location={{}} actions={{toggleMenuMore: () => ''}} />
        );
        // console.log(wrapper.debug());
        expect(wrapper.find('.links-bar').length).toEqual(1);
        expect(wrapper.find('Link').length).toEqual(5);
    });
});