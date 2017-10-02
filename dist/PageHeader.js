(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.PageHeader = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

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

  var PageHeader = function (_Component) {
    _inherits(PageHeader, _Component);

    function PageHeader(props) {
      _classCallCheck(this, PageHeader);

      var _this = _possibleConstructorReturn(this, (PageHeader.__proto__ || Object.getPrototypeOf(PageHeader)).call(this, props));

      _this.state = {
        stickyHeader: false
      };
      _this.handleScroll = _this.handleScroll.bind(_this);
      return _this;
    }

    _createClass(PageHeader, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }
    }, {
      key: 'handleScroll',
      value: function handleScroll() {
        var element = document.querySelector('.pageHeader');
        var pageY = window.scrollY;
        if (pageY !== 0 && element.getBoundingClientRect().bottom > 100) {
          this.setState({ stickyHeader: true });
        } else if (pageY === 0) {
          this.setState({ stickyHeader: false });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        if (this.state.stickyHeader) {
          var stickyClass = {
            top: '0.000em'
          };
        }
        return _react2.default.createElement(
          'div',
          { className: 'container-fluid pageHeader', style: stickyClass },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-6' },
              _react2.default.createElement(
                'div',
                { className: 'page-title text-left' },
                this.props.pageTitle
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-6' },
              _react2.default.createElement(
                'button',
                { type: 'button', role: 'button', className: 'primary-btn pull-right' },
                'Save Form'
              )
            )
          )
        );
      }
    }]);

    return PageHeader;
  }(_react.Component);

  PageHeader.PropTypes = {
    pageTitle: _react.PropTypes.string
  };
  PageHeader.defaultProps = {
    pageTitle: 'CaseName'
  };

  exports.default = PageHeader;
});