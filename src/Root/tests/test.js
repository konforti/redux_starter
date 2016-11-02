import React from 'react';
import {Provider} from 'react-redux';
import {render, mount, shallow} from 'enzyme';
import expect from 'expect';
import {store} from '~/utils';
import Root from '../';

describe('Root', () => {

    it('Render Root', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <Root>
                    <div>Tast</div>
                </Root>
            </Provider>
        );
        expect(wrapper.find('div').length).toEqual(1);
        expect(wrapper.find('div').text()).toEqual('Tast');
    });
});