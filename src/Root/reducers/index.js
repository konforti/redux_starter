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

const functions = {
    [act.DATA_REQUESTED]: (state, action) => ({
        ...state,
        throbber: true,
    }),

    [act.DATA_SUCCEEDED]: (state, action) => ({
        ...state,
        entries: action.payload.entries,
        searchResult: action.payload.entries,
        throbber: false,
    }),

    [act.DATA_FAILED]: (state, action) => ({
        ...state,
        throbber: false,
    }),

    [act.UPDATE_SEARCH_TERM]: (state, action) => ({
        ...state,
        searchTerm: action.payload.term,
        searchResult: action.payload.searchResult,
    }),

    [act.TOGGLE_MENU_MORE]: (state, action) => ({
        ...state,
        menuShowMore: action.payload.menuShowMore,
    }),

    [act.BOOKMARKS_SUCCEEDED]: (state, action) => ({
        ...state,
        bookmarks: action.payload.bookmarks,
    }),

    [act.UPDATE_BOOKMARKS_SUCCEEDED]: (state, action) => ({
        ...state,
        bookmarks: action.payload.bookmarks,
    }),
};

/**
 * Reducer
 * @param state
 * @param action
 * @returns {*}
 */
export default function (state = initialState, action) {
    return functions[action.type]
            ? functions[action.type](state, action)
            : state;
}