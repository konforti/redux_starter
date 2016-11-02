import {Provider} from 'react-redux';
import React from 'react';
import {render, mount, shallow} from 'enzyme';
import expect from 'expect';
import {store} from '~/utils';
import {Bookmarks} from './';

describe('<Bookmarks />', () => {

    it('Render Bookmarks', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Bookmarks entries={[]} bookmarks={[]} actions={{}} />
            </Provider>

        );
        // console.log(wrapper.debug());
        expect(wrapper.find('.bookmarks').length).toEqual(1);
    });
});