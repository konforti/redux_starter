import React, {PropTypes} from 'react';
import {config, history, t} from '~/utils';
import {Link} from 'react-router';
import SvgIcon from '~/src/Root/components/SvgIcon';
import {connect} from 'react-redux';
import actions from '~/src/Root/actions';

const expendLessIcon = 'M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z';
const expendMoreIcon = 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z';

/**
 * LinksBar
 */
const LinksBar = ({location, actions, menuShowMore}) => {
    const qs = location.search;
    const sh = location.hash;

    return (
        <div className='links'>
            <div className='links-bar'>
                <Link to={`/topic/music/${qs}${sh}`} className='link' activeClassName='active'>{t('Music')}</Link>
                <Link to={`/topic/politics/${qs}${sh}`} className='link' activeClassName='active'>{t('politics')}</Link>
                <Link to={`/topic/food/${qs}${sh}`} className='link' activeClassName='active'>{t('Food')}</Link>
                <Link to={`/topic/parenthood/${qs}${sh}`} className='link' activeClassName='active'>{t('Parenthood')}</Link>
                <Link to={`/topic/culture/${qs}${sh}`} className='link' activeClassName='active'>{t('Culture')}</Link>
            </div>
            <div className='more-links' onClick={actions.toggleMenuMore}>
                <SvgIcon path={menuShowMore ? expendMoreIcon : expendLessIcon} />
                {menuShowMore
                    ?
                    <div
                        className='link-list'
                    >
                        <Link to={`/topic/sports/${qs}${sh}`} className='link' activeClassName='active'>{t('Sports')}</Link>
                        <Link to={`/topic/business/${qs}${sh}`} className='link' activeClassName='active'>{t('Business')}</Link>
                    </div>
                    : null}
            </div>
        </div>
    );
};

LinksBar.propTypes = {
    location: PropTypes.object,
    actions: PropTypes.object,
    menuShowMore: PropTypes.bool,
};

export default connect(
    state => ({
        menuShowMore: state.Root.menuShowMore,
        location: location,
    }),
    dispatch => ({
        actions: actions(dispatch),
    }),
    null,
    {pure: false}
)(LinksBar);
