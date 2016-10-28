// @flow

import React from 'react';
import {connect} from 'react-redux';
import Grid from '~/src/Root/components/Grid';
import {t} from '~/utils';
import SearchBar from '../SearchBar';
import Actions from '../../actions';


/**
 * Search
 * @param searchResult
 * @param bookmarks
 * @returns {XML}
 * @constructor
 */
type propTypes = {searchResult: Object[], bookmarks: string[]};
const Search = ({searchResult, bookmarks}: propTypes) => {
    const entriesWithBookmarks = searchResult.map(item => {
        item.selected = bookmarks.indexOf(item.slug) !== -1;
        return item;
    });

    const screen = (
        <div className='content'>
            <div className='nav-bar'>
                <SearchBar />
            </div>
            <Grid items={entriesWithBookmarks} selectAction={() => ''} />
        </div>
    );

    return (
        <div className='search'>
            {screen}
        </div>
    );
};

export default connect(
    state => ({
        searchResult: state.Root.searchResult,
        bookmarks: state.Root.bookmarks,
    }),
    dispatch => ({
        actions: Actions(dispatch),
    }),
)(Search);