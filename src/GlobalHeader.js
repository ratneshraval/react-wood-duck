import React from 'react';
import PropTypes from 'prop-types';

const defaultSearchIcon = () => <i className="fa fa-search"/>
const defaultAddIcon = () => <i className="fa fa-plus"/>
const defaultBellIcon = () => <i className="fa fa-bell"/>

class GlobalHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { logo, searchIcon, addIcon, notificationIcon, profileName, profileAvatar } = this.props;
        return (
            <header className="container-fluid" role="banner">
                <nav className="row" role="navigation">
                    <div className="col-xs-12 col-sm-1">
                        <div className="logo">{logo}</div>
                    </div>
                    <div className="col-xs-12 col-sm-11">
                        <div className="pull-right">
                            <ul className="header-actions">
                                <li>
                                <a role="search" aria-search="search" href="#">{searchIcon}</a>   
                                </li>
                                <li>
                                <a aria-add="add" href="#">{addIcon}</a>
                                </li>
                                <li>
                                <a aria-notification="notification" href="#">{notificationIcon}</a>
                                </li>
                                <li>
                                    <span className="divider"/>
                                </li>
                                <li>
                                    <p className="profile"> <a href="#">{profileName}</a></p>
                                </li>
                                <li>
                                    <div className="profile-avatar">{profileAvatar}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}


GlobalHeader.PropTypes = {
    logo: PropTypes.string,
    profileName: PropTypes.string,
    profileAvatar: PropTypes.string,
    searchIcon:PropTypes.any,
    addIcon:PropTypes.any,
    notificationIcon:PropTypes.any,
}

GlobalHeader.defaultProps = {
    logo: 'CWDS',
    profileName: 'Profile Name',
    profileAvatar: 'PN',
    searchIcon: defaultSearchIcon(),
    addIcon: defaultAddIcon(),
    notificationIcon: defaultBellIcon(),
}

export default GlobalHeader;
