import expect from 'expect';
import reducers, {initialState} from '../reducers';
import act from '../constants';

window.describe('Facebook reducers', () => {

    let state;
    window.beforeEach(() => {
        state = initialState;
    });

    window.it('should handle LOGIN_STATUS_SUCCEEDED correctly', () => {
        const expectedResult = {
            ...state,
            auth: {a: 1, b: 2, c: 3},
        };

        expect(reducers(state, {
            type: act.LOGIN_STATUS_SUCCEEDED,
            payload: {auth: {a: 1, b: 2, c: 3}}
        })).toEqual(expectedResult);
    });

    window.it('should handle USER_LOGIN_SUCCEEDED correctly', () => {
        const expectedResult = {
            ...state,
            auth: {a: 1, b: 2, c: 3},
        };

        expect(reducers(state, {
            type: act.USER_LOGIN_SUCCEEDED,
            payload: {auth: {a: 1, b: 2, c: 3}}
        })).toEqual(expectedResult);
    });

    window.it('should handle USER_LOGOUT_SUCCEEDED correctly', () => {
        const expectedResult = {
            ...state,
            auth: {a: 1, b: 2, c: 3},
        };

        expect(reducers(state, {
            type: act.USER_LOGOUT_SUCCEEDED,
            payload: {auth: {a: 1, b: 2, c: 3}}
        })).toEqual(expectedResult);
    });

    window.it('should handle UPLOADED_PHOTOS_SUCCEEDED correctly', () => {
        const expectedResult = {
            ...state,
            uploadedPhotos: [1, 2, 3],
            uploadedCursor: '123',
            throbber: false,
        };

        expect(reducers(state, {
            type: act.UPLOADED_PHOTOS_SUCCEEDED,
            payload: {
                photos: [1, 2, 3],
                cursor: '123',
            }
        })).toEqual(expectedResult);
    });

    window.it('should handle UPLOADED_PHOTOS_REQUESTED correctly', () => {
        const expectedResult = {
            ...state,
            throbber: true,
        };

        expect(reducers(state, {
            type: act.UPLOADED_PHOTOS_REQUESTED,
        })).toEqual(expectedResult);
    });

    window.it('should handle UPLOADED_PHOTOS_FAILED correctly', () => {
        const expectedResult = {
            ...state,
            throbber: false,
        };

        expect(reducers(state, {
            type: act.UPLOADED_PHOTOS_FAILED,
        })).toEqual(expectedResult);
    });

    window.it('should handle TAGGED_PHOTOS_SUCCEEDED correctly', () => {
        const expectedResult = {
            ...state,
            taggedPhotos: [1, 2, 3],
            taggedCursor: '123',
            throbber: false,
        };

        expect(reducers(state, {
            type: act.TAGGED_PHOTOS_SUCCEEDED,
            payload: {
                photos: [1, 2, 3],
                cursor: '123',
            }
        })).toEqual(expectedResult);
    });

    window.it('should handle TAGGED_PHOTOS_REQUESTED correctly', () => {
        const expectedResult = {
            ...state,
            throbber: true,
        };

        expect(reducers(state, {
            type: act.TAGGED_PHOTOS_REQUESTED,
        })).toEqual(expectedResult);
    });

    window.it('should handle TAGGED_PHOTOS_FAILED correctly', () => {
        const expectedResult = {
            ...state,
            throbber: false,
        };

        expect(reducers(state, {
            type: act.TAGGED_PHOTOS_FAILED,
        })).toEqual(expectedResult);
    });

    window.it('should handle ALBUM_PHOTOS_SUCCEEDED correctly', () => {
        const expectedResult = {
            ...state,
            albumPhotos: [1, 2, 3],
            albumPhotoCursor: '123',
            albumData: {a: 1, b: 2, c: 3},
            throbber: false,
        };

        expect(reducers(state, {
            type: act.ALBUM_PHOTOS_SUCCEEDED,
            payload: {
                photos: [1, 2, 3],
                cursor: '123',
                albumData: {a: 1, b: 2, c: 3}
            }
        })).toEqual(expectedResult);
    });

    window.it('should handle ALBUM_PHOTOS_REQUESTED correctly', () => {
        const expectedResult = {
            ...state,
            throbber: true,
        };

        expect(reducers(state, {
            type: act.ALBUM_PHOTOS_REQUESTED,
        })).toEqual(expectedResult);
    });

    window.it('should handle ALBUM_PHOTOS_FAILED correctly', () => {
        const expectedResult = {
            ...state,
            throbber: false,
        };

        expect(reducers(state, {
            type: act.ALBUM_PHOTOS_FAILED,
        })).toEqual(expectedResult);
    });

    window.it('should handle ALBUMS_SUCCEEDED correctly', () => {
        const expectedResult = {
            ...state,
            albums: [1, 2, 3],
            albumsCursor: '123',
            throbber: false,
        };

        expect(reducers(state, {
            type: act.ALBUMS_SUCCEEDED,
            payload: {albums: [1, 2, 3], cursor: '123'}
        })).toEqual(expectedResult);
    });

    window.it('should handle ALBUMS_REQUESTED correctly', () => {
        const expectedResult = {
            ...state,
            throbber: true,
        };

        expect(reducers(state, {
            type: act.ALBUMS_REQUESTED,
        })).toEqual(expectedResult);
    });

    window.it('should handle ALBUMS_FAILED correctly', () => {
        const expectedResult = {
            ...state,
            throbber: false,
        };

        expect(reducers(state, {
            type: act.ALBUMS_FAILED,
        })).toEqual(expectedResult);
    });

    window.it('should handle USER_SUCCEEDED correctly', () => {
        const expectedResult = {
            ...state,
            user: {id: '123', name: 'John'},
        };

        expect(reducers(state, {
            type: act.USER_SUCCEEDED,
            payload: {user: {id: '123', name: 'John'}},
        })).toEqual(expectedResult);
    });

    window.it('should handle SELECT_PHOTO correctly', () => {
        state.selected = ['456', '789'];

        const expectedResult = {
            ...state,
            selected: ['456', '789', '123'],
        };

        expect(reducers(state, {
            type: act.SELECT_PHOTO,
            payload: {link: '123'},
        })).toEqual(expectedResult);
    });

    window.it('should handle DESELECT_PHOTO correctly', () => {
        state.selected = ['123', '456', '789'];

        const expectedResult = {
            ...state,
            selected: ['456', '789'],
            limitReached: false,
        };

        expect(reducers(state, {
            type: act.DESELECT_PHOTO,
            payload: {link: '123'},
        })).toEqual(expectedResult);
    });

    window.it('should handle SELECT_PHOTO_LIMIT correctly', () => {
        const expectedResult = {
            ...state,
            limitReached: true,
        };

        expect(reducers(state, {
            type: act.SELECT_PHOTO_LIMIT,
        })).toEqual(expectedResult);
    });

    window.it('should return the initial state', () => {
        const expectedResult = state;
        expect(reducers(undefined, {})).toEqual(expectedResult);
    });

    window.it('should return the previous state', () => {
        const expectedResult = state;
        expect(reducers(state, {type: 'UNRECOGNIZED_TYPE'})).toEqual(expectedResult);
    });
});
    