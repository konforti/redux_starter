import TaggedPhotos from './index';
import {Provider} from 'react-redux';
import {store} from '~/utils';
import React from 'react';
import {render, mount, shallow} from 'enzyme';
import expect from 'expect';

window.describe('<TaggedPhotos />', () => {

    window.it('Render TaggedPhotos', () => {
        const wrapper = mount(
            <Provider store={store}>
                <TaggedPhotos />
            </Provider>

        );
        // console.log(wrapper.debug());
        expect(wrapper.find('TaggedPhotos').length).toEqual(1);
        expect(wrapper.find('.tagged-photos').length).toEqual(1);
    });
});