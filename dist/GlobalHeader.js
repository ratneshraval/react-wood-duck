(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'prop-types'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('prop-types'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.propTypes);
        global.GlobalHeader = mod.exports;
    }
})(this, function (exports, _react, _propTypes) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _propTypes2 = _interopRequireDefault(_propTypes);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var defaultSearchIcon = function defaultSearchIcon() {
        return _react2.default.createElement('i', { className: 'fa fa-search' });
    };
    var defaultAddIcon = function defaultAddIcon() {
        return _react2.default.createElement('i', { className: 'fa fa-plus' });
    };
    var defaultBellIcon = function defaultBellIcon() {
        return _react2.default.createElement('i', { className: 'fa fa-bell' });
    };

    var GlobalHeader = function (_React$Component) {
        _inherits(GlobalHeader, _React$Component);

        function GlobalHeader(props) {
            _classCallCheck(this, GlobalHeader);

            return _possibleConstructorReturn(this, (GlobalHeader.__proto__ || Object.getPrototypeOf(GlobalHeader)).call(this, props));
        }

        _createClass(GlobalHeader, [{
            key: 'render',
            value: function render() {
                var _props = this.props,
                    logo = _props.logo,
                    searchIcon = _props.searchIcon,
                    addIcon = _props.addIcon,
                    notificationIcon = _props.notificationIcon,
                    profileName = _props.profileName,
                    profileAvatar = _props.profileAvatar;

                return _react2.default.createElement(
                    'header',
                    { className: 'container-fluid', role: 'banner' },
                    _react2.default.createElement(
                        'nav',
                        { className: 'row', role: 'navigation' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-xs-12 col-sm-1' },
                            _react2.default.createElement(
                                'div',
                                { className: 'logo' },
                                logo
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-xs-12 col-sm-11' },
                            _react2.default.createElement(
                                'div',
                                { className: 'pull-right' },
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'header-actions' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { role: 'search', 'aria-search': 'search', href: '#' },
                                            searchIcon
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { 'aria-add': 'add', href: '#' },
                                            addIcon
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { 'aria-notification': 'notification', href: '#' },
                                            notificationIcon
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement('span', { className: 'divider' })
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'profile' },
                                            ' ',
                                            _react2.default.createElement(
                                                'a',
                                                { href: '#' },
                                                profileName
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'profile-avatar' },
                                            profileAvatar
                                        )
                                    )
                                )
                            )
                        )
                    )
                );
            }
        }]);

        return GlobalHeader;
    }(_react2.default.Component);

    GlobalHeader.PropTypes = {
        logo: _propTypes2.default.string,
        profileName: _propTypes2.default.string,
        profileAvatar: _propTypes2.default.string,
        searchIcon: _propTypes2.default.any,
        addIcon: _propTypes2.default.any,
        notificationIcon: _propTypes2.default.any
    };

    GlobalHeader.defaultProps = {
        logo: 'CWDS',
        profileName: 'Profile Name',
        profileAvatar: 'PN',
        searchIcon: defaultSearchIcon(),
        addIcon: defaultAddIcon(),
        notificationIcon: defaultBellIcon()
    };

    exports.default = GlobalHeader;
});