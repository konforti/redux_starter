import expect from 'expect';
import * as Actions from '../actions';
import {store, config} from '~/utils';
import act from '../constants';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

//          window.FB = {
//             addFriend: sinon.stub(),
//             api: sinon.stub(),
//             getAccessToken: sinon.stub(),
//             getAuthResponse: sinon.stub(),
//             getLoginStatus: sinon.stub(),
//             getUserID: sinon.stub(),
//             init: sinon.stub(),
//             login: sinon.stub(),
//             logout: sinon.stub(),
//             publish: sinon.stub(),
//             share: sinon.stub(),
//             ui: sinon.stub(),
//         };

window.describe('Facebook actions', () => {
    window.beforeEach(() => {
        window.FB = {
            api: (a, cb) => {cb({data: []});},
            logout: (cb) => {cb({data: []});},
            login: (cb) => {cb({data: []});},
            getLoginStatus: (cb) => {cb({data: []});},
        };
    });

    // window.it('should handle loginStatus correctly', async() => {
    //     const fn = Actions.loginStatus();
    //
    //     const store = mockStore({});
    //
    //     const expectedActions = [
    //         {type: act.LOGIN_STATUS_REQUESTED},
    //         {type: act.LOGIN_STATUS_SUCCEEDED, payload: {auth: {data: []}}}
    //     ];
    //
    //     await store.dispatch(fn);
    //     expect(store.getActions()).toEqual(expectedActions);
    // });

    window.it('should handle login correctly', async() => {
        const fn = Actions.login();

        const store = mockStore({
            FaceBook: {auth: {authResponse: {userID: '123'}}},
        });

        const expectedActions = [
            {type: 'USER_LOGIN_REQUESTED'},
            {type: 'USER_LOGIN_SUCCEEDED', payload: {auth: {data: []}}},
            {type: 'USER_REQUESTED'},
            {type: 'USER_SUCCEEDED', payload: {user: {data: []}}}];

        await store.dispatch(fn);
        expect(store.getActions()).toEqual(expectedActions);
    });

    window.it('should handle logout correctly', async() => {
        const fn = Actions.logout();

        const store = mockStore({
            FaceBook: {auth: {authResponse: {userID: '123'}}},
        });

        const expectedActions = [
            {type: act.USER_LOGOUT_REQUESTED},
            {type: act.USER_LOGOUT_SUCCEEDED, payload: {auth: {data: []}}}
        ];

        await store.dispatch(fn);
        expect(store.getActions()).toEqual(expectedActions);
    });

    window.it('should handle getUser correctly', async() => {
        const fn = Actions.getUser();

        const store = mockStore({
            FaceBook: {auth: {authResponse: {userID: '123'}}},
        });

        const expectedActions = [
            {type: act.USER_REQUESTED},
            {type: act.USER_SUCCEEDED, payload: {user: {data: []}}}
        ];

        await store.dispatch(fn);
        expect(store.getActions()).toEqual(expectedActions);
    });

    window.it('should handle getUploadedPhotos correctly', async() => {
        const fn = Actions.getUploadedPhotos();

        const store = mockStore({
            FaceBook: {auth: {authResponse: {userID: '123'}}},
        });

        const expectedActions = [
            {type: act.UPLOADED_PHOTOS_REQUESTED},
            {type: act.UPLOADED_PHOTOS_SUCCEEDED, payload: {cursor: null, photos: []}}
        ];

        await store.dispatch(fn);
        expect(store.getActions()).toEqual(expectedActions);
    });

    window.it('should handle getTaggedPhotos correctly', async() => {
        const fn = Actions.getTaggedPhotos();

        const store = mockStore({
            FaceBook: {auth: {authResponse: {userID: '123'}}},
        });

        const expectedActions = [
            {type: act.TAGGED_PHOTOS_REQUESTED},
            {type: act.TAGGED_PHOTOS_SUCCEEDED, payload: {cursor: null, photos: []}}
        ];

        await store.dispatch(fn);
        expect(store.getActions()).toEqual(expectedActions);
    });

    window.it('should handle getAlbums correctly', async() => {
        const fn = Actions.getAlbums();

        const store = mockStore({
            FaceBook: {auth: {authResponse: {userID: '123'}}},
        });

        const expectedActions = [
            {type: act.ALBUMS_REQUESTED},
            {type: act.ALBUMS_SUCCEEDED, payload: {albums: [], cursor: null}}
        ];

        await store.dispatch(fn);
        expect(store.getActions()).toEqual(expectedActions);
    });

    window.it('should handle getAlbumPhotos correctly', async() => {
        const fn = Actions.getAlbumPhotos();

        const store = mockStore({
            FaceBook: {auth: {authResponse: {userID: '123'}}},
        });

        const expectedActions = [
            {type: act.ALBUM_PHOTOS_REQUESTED},
            {type: act.ALBUM_PHOTOS_SUCCEEDED, payload: {cursor: null, photos: [], albumData: {data: []}}}
        ];

        await store.dispatch(fn);
        expect(store.getActions()).toEqual(expectedActions);
    });

    window.it('should handle togglePhoto select correctly', async() => {
        const fn = Actions.togglePhoto('123');

        const store = mockStore({
            Root: {extParams: {multiple: true}},
            FaceBook: {selected: []},
        });

        const expectedActions = [
            {type: act.SELECT_PHOTO, payload: {link: '123'}},
        ];

        await store.dispatch(fn);
        expect(store.getActions()).toEqual(expectedActions);
    });

    window.it('should handle uploadSelected correctly', async() => {
        const fn = Actions.uploadSelected(['123']);

        const store = mockStore({});

        const expectedActions = [
            {type: act.UPLOAD_SELECTED_REQUESTED},
            {type: act.UPLOAD_SELECTED_SUCCEEDED},
        ];

        await store.dispatch(fn);
        expect(store.getActions()).toEqual(expectedActions);
    });

});
