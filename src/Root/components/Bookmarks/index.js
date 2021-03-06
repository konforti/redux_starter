// @flow

import React from 'react';
import {connect} from 'react-redux';
import actions from '~/src/Root/actions';
import Grid from '~/src/Root/components/Grid';
import {Link} from 'react-router';
import SvgIcon from '~/src/Root/components/SvgIcon';
import {t} from '~/utils';
import LinksBar from '../LinksBar';

/**
 * Bookmarks
 * @param entries
 * @param bookmarks
 * @param actions
 * @returns {XML}
 * @constructor
 */
type propTypes = {actions: Object, entries: Object[], bookmarks: Object[]}
export const Bookmarks = ({entries, bookmarks, actions}: propTypes) => {
    const entriesWithBookmarks = entries
        .filter(item => bookmarks.indexOf(item.slug) !== -1)
        .map(item => {
            item.selected = true;
            return item;
        });

    const searchIcon = 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z';
    const bookmarksIcon = 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z';

    const screen = !entriesWithBookmarks.length
        ?
            <div className='no-items'>
                <h3>{t('No Items')}</h3>
            </div>
        :
            <div className='content'>
                <Grid items={entriesWithBookmarks} selectAction={actions.toggleBookmark} />
            </div>;

    return (
        <div className='bookmarks'>
            <div className='nav-bar'>
                <LinksBar />
                <Link to={'/bookmarks'} className='to-bookmarks' activeClassName='active'>
                    <SvgIcon path={bookmarksIcon} />
                </Link>
                <Link to={'/search'} className='to-search' activeClassName='active'>
                    <SvgIcon path={searchIcon} />
                </Link>
            </div>
            {screen}
        </div>
    );
};

export default connect(
    state => ({
        entries: state.Root.entries,
        bookmarks: state.Root.bookmarks,
    }),
    dispatch => ({
        actions: actions(dispatch),
    }),
)(Bookmarks);