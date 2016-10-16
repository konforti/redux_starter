import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {t} from '~/utils';
import * as Actions from './actions';
import Socials from './components/Socials';
import Throb from './components/Throb';
import Hook from 'react-hooks';

/**
 * Root
 */
const Root = ({children, throbber, actions} ) => (
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
        <footer>

        </footer>
    </div>
);

Root.propTypes = {
    children: PropTypes.object.isRequired,
    throbber: PropTypes.bool,
    actions: PropTypes.object,
};

export default connect(
    state => ({
        throbber: state.Root.throbber,
    }),
    dispatch => ({
        actions: bindActionCreators(Actions, dispatch),
    }),
)(Root);
