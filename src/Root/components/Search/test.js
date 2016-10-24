import Search from './';
import {Provider} from 'react-redux';
import {store} from '~/utils';
import React from 'react';
import {render, mount, shallow} from 'enzyme';
import expect from 'expect';

window.describe('<Search />', () => {

    window.it('Render Search', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Search />
            </Provider>

        );
        // console.log(wrapper.debug());
        expect(wrapper.find('.search').length).toEqual(1);
    });
});