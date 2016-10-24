import GridTile from './index';
import React from 'react';
import {render, mount, shallow} from 'enzyme';
import expect from 'expect';

window.describe('GridTile', () => {

    window.it('Render GridTile', () => {
        const wrapper = shallow(
            <GridTile
                id='1'
                link='1'
                thumbnail=''
                title='A'
                subtitle='a'
                className='special-tile'
                selected={true}
                selectAction={() => ''}
            >
                <img src='image.png' alt=''/>
            </ GridTile>
        );
        expect(wrapper.find('.tile').length).toEqual(1);
        expect(wrapper.find('.tile').hasClass('special-tile')).toEqual(true);
        expect(wrapper.find('.title').text()).toEqual('A');
        expect(wrapper.find('.subtitle').text()).toEqual('a');
    });
});