import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

/**
 * Throb
 * @constructor
 */
export const Throb = ({throbber}) => (
    throbber
        ?
        <svg className='throb' viewBox='25 25 50 50'>
            <circle className='path' cx='50' cy='50' r='20' fill='none' strokeWidth='2' />
        </svg>
        : null
);

Throb.propTypes = {
    throbber: PropTypes.bool,
};

export default connect(
    state => ({
        throbber: state.Root.throbber,
    }),
)(Throb);