// @flow

import React from 'react';
import GridTile from './GridTile';

/**
 * getTiles
 * @param items
 * @param selectAction
 */
const getTiles = (items: Object[], selectAction: Function) => (
    items.map((tile) => (
        <GridTile
            key={tile.slug}
            id={tile.slug}
            link={tile.url}
            title={tile.name}
            thumbnail={tile.image}
            subtitle={tile.url}
            selected={tile.selected}
            selectAction={selectAction}
        />
    ))
);

/**
 * Grid
 * @param items
 * @param selectAction
 * @constructor
 */
type propTypes = {items: Object[], selectAction: Function}
const Grid = ({items, selectAction}: propTypes) => (
    <div className='grid'>
        {getTiles(items, selectAction)}
    </div>
);

export default Grid;