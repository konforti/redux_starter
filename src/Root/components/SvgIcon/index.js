// @flow

import React from 'react';

/**
 * Svg
 * @param path
 * @param className
 * @param viewBox
 * @param height
 * @param width
 * @constructor
 */
type propTypes = {path: string, className?: string, viewBox?: string, height?: string, width?: string};
const SvgIcon = ({path, className = '', viewBox, height, width}: propTypes) => (
    <svg
        className={className}
        viewBox={viewBox || '0 0 24 24'}
        height={height || '24'}
        width={width || '24'}
    >
        <path d={path} />
    </svg>
);

export default SvgIcon;