import React from 'react';
import {render, mount, shallow} from 'enzyme';
import expect from 'expect';
import Socials from './';

window.describe('Socials', () => {

    window.it('Render Socials', () => {
        const wrapper = shallow(
            <Socials />
        );
        expect(wrapper.find('.socials').length).toEqual(1);
    });
});