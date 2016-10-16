import React, {PropTypes, defaultProps} from 'react';
import SvgIcon from '~/src/Root/components/SvgIcon';

const selectedIcon = 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z';
const deselectedIcon = 'M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z';

/**
 * Grid
 * @param id
 * @param link
 * @param thumbnail
 * @param title
 * @param subtitle
 * @param className
 * @param selected
 * @param selectAction
 * @returns {XML}
 * @constructor
 */
const Grid = ({id, link, thumbnail, title, subtitle, className, selected, selectAction}) => {
    return (
        <a className={`tile ${className}`} href={link} target='_blank'>
            <div className='tile-inner' style={{backgroundImage: `url(${thumbnail})`}}></div>
            <span
                className='bookmark'
                onClick={(e) => {
                    e.preventDefault();
                    selectAction(id);
                }}
            >
                <SvgIcon path={selected ? selectedIcon : deselectedIcon} />
            </span>
            <div className='info'>
                <div className='headline'>
                    <h2 className='title'>
                        {title}
                    </h2>
                    <div className='subtitle' title={subtitle}>
                        {subtitle}
                    </div>
                </div>
            </div>


        </a>
    );
};

Grid.propTypes = {
    id: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    thumbnail: PropTypes.string,
    className: PropTypes.string,
    selectAction: PropTypes.func,
    selected: PropTypes.bool,
};

Grid.defaultProps = {
    className: '',
};

export default Grid;