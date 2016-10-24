import Topic from './';
import {Provider} from 'react-redux';
import {store} from '~/utils';
import React from 'react';
import {render, mount, shallow} from 'enzyme';
import expect from 'expect';

window.describe('<Topic />', () => {

    window.it('Render Topic', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Topic params={{slug: 'slugish'}}/>
            </Provider>

        );
        // console.log(wrapper.debug());
        expect(wrapper.find('.slugish').length).toEqual(1);
    });
});