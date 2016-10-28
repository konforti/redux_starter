// @flow

import act from '../constants';

/**
 * initialState.
 */
export const initialState = {
    throbber: false,
    entries: [],
    searchResult: [],
    searchTerm: '',
    menuShowMore: false,
    bookmarks: [],
};

/**
 * Reducer
 * @param state
 * @param action
 * @returns {*}
 */
export default function (state: Object = initialState, action: Object) {
    const actions = {

        [act.DATA_REQUESTED]: () => ({
            ...state,
            throbber: true,
        }),

        [act.DATA_SUCCEEDED]: () => ({
            ...state,
            entries: action.payload.entries,
            searchResult: action.payload.entries,
            throbber: false,
        }),

        [act.DATA_FAILED]: () => ({
            ...state,
            throbber: false,
        }),

        [act.UPDATE_SEARCH_TERM]: () => ({
            ...state,
            searchTerm: action.payload.term,
            searchResult: action.payload.searchResult,
        }),

        [act.TOGGLE_MENU_MORE]: () => ({
            ...state,
            menuShowMore: action.payload.menuShowMore,
        }),

        [act.BOOKMARKS_SUCCEEDED]: () => ({
            ...state,
            bookmarks: action.payload.bookmarks,
        }),

        [act.UPDATE_BOOKMARKS_SUCCEEDED]: () => ({
            ...state,
            bookmarks: action.payload.bookmarks,
        }),
    };

    return actions[action.type]
        ? actions[action.type]()
        : state;
}