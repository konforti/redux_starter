import {Provider} from 'react-redux';
import React from 'react';
import {render, mount, shallow} from 'enzyme';
import expect from 'expect';
import {store} from '~/utils';
import Topic from './';

describe('<Topic />', () => {

    it('Render Topic', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Topic params={{slug: 'slugish'}} />
            </Provider>

        );
        // console.log(wrapper.debug());
        expect(wrapper.find('.slugish').length).toEqual(1);
    });
});