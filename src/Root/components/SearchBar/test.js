import React from 'react';
import expect from 'expect';
import {render, mount, shallow} from 'enzyme';
import SvgIcon from '~/src/Root/components/SvgIcon';
import Text from '~/src/Root/components/Text';
import {SearchBar} from './';

describe('Root <SearchBar />', () => {

    it('Render SearchBar', () => {
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