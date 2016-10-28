// @flow

import React from 'react';
import {connect} from 'react-redux';

/**
 * Throb
 * @constructor
 */
type propTypes = {throbber: boolean};
export const Throb = ({throbber}: propTypes) => (
    throbber
        ?
            <svg className='throb' viewBox='25 25 50 50'>
                <circle className='path' cx='50' cy='50' r='20' fill='none' strokeWidth='2' />
            </svg>
        : null
);

export default connect(
    state => ({
        throbber: state.Root.throbber,
    }),
)(Throb);