import {Provider} from 'react-redux';
import React from 'react';
import {render, mount, shallow} from 'enzyme';
import expect from 'expect';
import {store} from '~/utils';
import Search from './';

describe('<Search />', () => {

    it('Render Search', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Search />
            </Provider>

        );
        // console.log(wrapper.debug());
        expect(wrapper.find('.search').length).toEqual(1);
    });
});