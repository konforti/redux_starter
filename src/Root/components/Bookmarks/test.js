import {Provider} from 'react-redux';
import React from 'react';
import {render, mount, shallow} from 'enzyme';
import expect from 'expect';
import {store} from '~/utils';
import Bookmarks from './';

window.describe('<Bookmarks />', () => {

    window.it('Render Bookmarks', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Bookmarks />
            </Provider>

        );
        // console.log(wrapper.debug());
        expect(wrapper.find('.bookmarks').length).toEqual(1);
    });
});