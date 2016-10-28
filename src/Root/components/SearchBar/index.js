// @flow

import React from 'react';
import {history, t} from '~/utils';
import {connect} from 'react-redux';
import SvgIcon from '~/src/Root/components/SvgIcon';
import Text from '~/src/Root/components/Text';
import Actions from '../../actions';

const backIcon = 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z';
const searchIcon = 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z';

/**
 * SearchBar
 */
type propTypes = {actions: Object, searchTerm: string};
export const SearchBar = ({actions, searchTerm}: propTypes) => (
    <div className='search-bar'>
        <div className='go-back' onClick={history.goBack}>
            <SvgIcon path={backIcon} />
        </div>
        <Text
            onChange={actions.updateSearchTerm}
            placeholder={t('Search Entry')}
            onEnter={() => ''}
        />
        <div className='do-search'>
            <SvgIcon path={searchIcon} />
        </div>
    </div>


);

export default connect(
    state => ({
        searchTerm: state.Root.searchTerm,
    }),
    dispatch => ({
        actions: Actions(dispatch),
    }),
)(SearchBar);