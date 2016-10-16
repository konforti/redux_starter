import GridTile from './index';
import React from 'react';
import {render, mount, shallow} from 'enzyme';
import expect from 'expect';

window.describe('GridTile', () => {

    window.it('Render GridTile', () => {
        const wrapper = shallow(
            <GridTile
                link='1' 
                title='A'
                subtitle='a'
                className='special-tile'
                selected
                extParams={{}}
            >
                <img src='image.png' alt='' />
            </ GridTile>
        );
        expect(wrapper.find('.tile').length).toEqual(1);
        expect(wrapper.find('.tile').hasClass('special-tile')).toEqual(true);
        expect(wrapper.find('.tile').hasClass('selected')).toEqual(true);
        expect(wrapper.find('.title').text()).toEqual('A');
        expect(wrapper.find('.subtitle').text()).toEqual('a');
        expect(wrapper.find('img').length).toEqual(1);
        expect(wrapper.find('img').prop('src')).toEqual('image.png');
    });
});