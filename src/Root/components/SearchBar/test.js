import {SearchBar} from './index';
import React from 'react';
import {render, mount, shallow} from 'enzyme';
import expect from 'expect';
import SvgIcon from '~/src/Root/components/SvgIcon';
import Text from '~/src/Root/components/Text';

window.describe('Dropbox <SearchBar />', () => {

    window.it('Render SearchBar', () => {
        const wrapper = shallow(
            <SearchBar onSearch={() => ''} actions={{updateSearchTerm: () => ''}} searchTerm='' />
        );
        // console.log(wrapper.debug());
        expect(wrapper.find('.go-back').length).toEqual(1);
        expect(wrapper.find(Text).length).toEqual(1);
        expect(wrapper.find('.do-search').length).toEqual(1);
        expect(wrapper.find(SvgIcon).length).toEqual(2);
    });
});