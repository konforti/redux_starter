import React from 'react';
import {render, mount, shallow} from 'enzyme';
import expect from 'expect';
import {Throb} from './';

describe('Throb (on)', () => {

    it('Render Throb', () => {
        const wrapper = shallow(
            <Throb throbber={1} />
        );
        // console.log(wrapper.debug());
        expect(wrapper.find('circle').length).toEqual(1);
        expect(wrapper.find('svg').hasClass('throb')).toEqual(true);
    });

    it('Render Throb (off)', () => {
        const wrapper = shallow(
            <Throb />
        );
        // console.log(wrapper.debug());
        expect(wrapper.find('circle').length).toEqual(0);
        expect(wrapper.find('svg').length).toEqual(0);
    });
});