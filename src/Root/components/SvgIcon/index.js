import React, {PropTypes} from 'react';

/**
 * Svg
 * @param path
 * @param className
 * @param viewBox
 * @param height
 * @param width
 * @constructor
 */
const SvgIcon = ({path, className, viewBox, height, width}) => (
    <svg
        className={className}
        viewBox={viewBox || '0 0 24 24'}
        height={height || '24'}
        width={width || '24'}
    >
        <path d={path} />
    </svg>
);

SvgIcon.propTypes = {
    path: PropTypes.string.isRequired,
    className: PropTypes.string,
    viewBox: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
};

SvgIcon.defaultProps = {
    className: '',
};

export default SvgIcon;