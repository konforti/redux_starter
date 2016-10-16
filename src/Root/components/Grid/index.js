import React, {PropTypes} from 'react';
import GridTile from './GridTile';

/**
 * getTiles
 * @param items
 * @param selectAction
 */
const getTiles = (items, selectAction) => (
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
const Grid = ({items, selectAction}) => (
    <div className='grid'>
        {getTiles(items, selectAction)}
    </div>
);

Grid.propTypes = {
    items: PropTypes.array,
    selectAction: PropTypes.func,
};

export default Grid;