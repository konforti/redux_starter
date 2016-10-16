import React, {PropTypes} from 'react';
import Grid from '~/src/Root/components/Grid';
import SearchBar from '~/src/Root/components/SearchBar';
import {t} from '~/utils';
import actions from '../../actions';
import {connect} from 'react-redux';

/**
 * Search
 * @param searchResult
 * @param searchTerm
 * @param bookmarks
 * @param actions
 * @returns {XML}
 * @constructor
 */
const Search = ({searchResult, searchTerm, bookmarks, actions}) => {
    const entriesWithBookmarks = searchResult.map(item => {
        item.selected = bookmarks.indexOf(item.slug) !== -1;
        return item;
    });

    const screen = (
        <div className='content'>
            <div className='nav-bar'>
                <SearchBar />
            </div>
            <Grid items={entriesWithBookmarks} />
        </div>
    );

    return (
        <div className='search'>
            {screen}
        </div>
    );
};

Search.propTypes = {
    actions: PropTypes.object,
    searchResult: PropTypes.array,
    searchTerm: PropTypes.string,
    bookmarks: PropTypes.array,
};

export default connect(
    state => ({
        searchResult: state.Root.searchResult,
        searchTerm: state.Root.searchTerm,
        bookmarks: state.Root.bookmarks,
    }),
    dispatch => ({
        actions: actions(dispatch),
    }),
)(Search);