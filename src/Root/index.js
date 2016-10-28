// @flow

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Hook from 'react-hooks';
import {t} from '~/utils';
import Actions from './actions';
import Socials from './components/Socials';
import Throb from './components/Throb';

/**
 * Root
 */
type propTypes = {children: Object, throbber: boolean, actions: Object}
const Root = ({children, throbber, actions}: propTypes) => (
    <div>
        <Hook
            didMount={() => {
                actions.getData();
                actions.getBookmarks();
            }}
        />

        <Throb />
        <header>
            <div className='logo'>
                <div className='title'>{`/ ${t('Redux Starter')}`}</div>
                <Socials />
            </div>
        </header>
        <main>
            {children}
        </main>
        <footer />
    </div>
);

export default connect(
    state => ({
        throbber: state.Root.throbber,
    }),
    dispatch => ({
        actions: Actions(dispatch),
    }),
)(Root);
