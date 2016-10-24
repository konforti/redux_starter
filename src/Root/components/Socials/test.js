import Socials from './';
import React from 'react';
import {render, mount, shallow} from 'enzyme';
import expect from 'expect';

window.describe('Socials', () => {

    window.it('Render Socials', () => {
        const wrapper = shallow(
            <Socials />
        );
        expect(wrapper.find('.socials').length).toEqual(1);
    });
});