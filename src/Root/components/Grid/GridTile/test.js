import React from 'react';
import {render, mount, shallow} from 'enzyme';
import expect from 'expect';
import GridTile from './';

describe('GridTile', () => {

    it('Render GridTile', () => {
        const wrapper = shallow(
            <GridTile
                id='1'
                link='1'
                thumbnail=''
                title='A'
                subtitle='a'
                className='special-tile'
                selected={1}
                selectAction={() => ''}
            >
                <img src='image.png' alt='' />
            </ GridTile>
        );
        expect(wrapper.find('.tile').length).toEqual(1);
        expect(wrapper.find('.tile').hasClass('special-tile')).toEqual(true);
        expect(wrapper.find('.title').text()).toEqual('A');
        expect(wrapper.find('.subtitle').text()).toEqual('a');
    });
});