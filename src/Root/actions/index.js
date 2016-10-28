import shuffle from 'lodash/shuffle';
import {bindActionCreators} from 'redux';
import {config, api} from '~/utils';
import act from '../constants';

/**
 * loginStatus
 */
export const getData = () => async(dispatch, getState) => {
    const sheetUrl = `https://spreadsheets.google.com/feeds/list/${config.sheetId}/od6/public/values`;
    try {
        dispatch({type: act.DATA_REQUESTED});
        const res = await api.get(sheetUrl, {alt: 'json'});
        const data = res.feed.entry
            .map(item => ({
                url: item['gsx$url'] ? item['gsx$url']['$t'] : '',
                name: item['gsx$name'] ? item['gsx$name']['$t'] : '',
                slug: item['gsx$slug'] ? item['gsx$slug']['$t'] : '',
                image: item['gsx$image'] ? item['gsx$image']['$t'] : '',
                topic: item['gsx$topic'] ? item['gsx$topic']['$t'] : '',
            }));

        const entries = shuffle(data);

        dispatch({type: act.DATA_SUCCEEDED, payload: {entries}});
    } catch (error) {
        dispatch({type: act.DATA_FAILED, payload: {error}});
    }
};

/**
 * updateSearchTerm
 * @param term
 */
export const updateSearchTerm = (term) => (dispatch, getState) => {
    const {entries} = getState().Root;

    const searchResult = term
        ? entries.filter(item => item.name.indexOf(term) !== -1)
        : entries;

    dispatch({type: act.UPDATE_SEARCH_TERM, payload: {term, searchResult}});
};

/**
 * toggleMenuMore
 */
export const toggleMenuMore = () => (dispatch, getState) => {
    const {menuShowMore} = getState().Root;
    dispatch({type: act.TOGGLE_MENU_MORE, payload: {menuShowMore: !menuShowMore}});
};

/**
 * toggleMenuMore
 */
export const toggleBookmark = (id) => async(dispatch, getState) => {
    const {bookmarks} = getState().Root;

    try {
        const newBookmarks = bookmarks.some(item => item === id)
            ? bookmarks.filter(item => item !== id)
            : bookmarks.concat([id]);

        const bm = await localStorage.setItem('redux_starter_bookmarks', JSON.stringify(newBookmarks));

        dispatch({type: act.UPDATE_BOOKMARKS_SUCCEEDED, payload: {bookmarks: newBookmarks}});
    } catch (error) {
        dispatch({type: act.UPDATE_BOOKMARKS_FAILED, payload: {error}});
    }
};

/**
 * toggleMenuMore
 */
export const getBookmarks = () => async(dispatch, getState) => {
    try {
        dispatch({type: act.BOOKMARKS_REQUESTED});
        const bookmarks = JSON.parse(await localStorage.getItem('redux_starter_bookmarks') || []);
        dispatch({type: act.BOOKMARKS_SUCCEEDED, payload: {bookmarks}});
    } catch (error) {
        dispatch({type: act.BOOKMARKS_FAILED, payload: {error}});
    }
};

export default (dispatch) => (
    bindActionCreators({
        getData,
        updateSearchTerm,
        toggleMenuMore,
        toggleBookmark,
        getBookmarks,
    }, dispatch)
);
