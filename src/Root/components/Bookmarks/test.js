import Bookmarks from './';
import {Provider} from 'react-redux';
import {store} from '~/utils';
import React from 'react';
import {render, mount, shallow} from 'enzyme';
import expect from 'expect';

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