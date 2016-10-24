import Grid from './';
import GridTile from './GridTile';
import React from 'react';
import {render, mount, shallow} from 'enzyme';
import expect from 'expect';

window.describe('Grid', () => {

    window.it('Render Grid', () => {
        const images = [
            {
                link: '1',
                title: 'A',
                subtitle: 'a',
                image: {
                    width: 10,
                    height: 10,
                },
                selected: false,
            }, {
                link: '2',
                title: 'B',
                subtitle: 'b',
                image: {
                    width: 10,
                    height: 10,
                },
                selected: false,
            }, {
                link: '3',
                title: 'C',
                subtitle: 'c',
                image: {
                    width: 10,
                    height: 10,
                },
                selected: false,
            },
        ];

        const wrapper = shallow(
            <Grid
                items={images}
                limitReached={false}
                actions={{}}
                wayPointAction={(v) => v}
                extParams={{}}
            />
        );
        expect(wrapper.find('.grid').length).toEqual(1);
        expect(wrapper.find(GridTile).length).toEqual(3);
    });
});