(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['react', '../pageHeader.js', 'react-dom/lib/ReactTestUtils'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('react'), require('../pageHeader.js'), require('react-dom/lib/ReactTestUtils'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.react, global.pageHeader, global.ReactTestUtils);
        global.PageHeader_test = mod.exports;
    }
})(this, function (_react, _pageHeader, _ReactTestUtils) {
    'use strict';

    var _react2 = _interopRequireDefault(_react);

    var _pageHeader2 = _interopRequireDefault(_pageHeader);

    var _ReactTestUtils2 = _interopRequireDefault(_ReactTestUtils);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    describe('PageHeader', function () {

        var input = {
            pageTitle: 'testPageTitle'
        };
        var renderedComp = _ReactTestUtils2.default.createRenderer();
        var compRendered = renderedComp.render(_react2.default.createElement(_pageHeader2.default, null));
        var resultTag = renderedComp.getRenderOutput();
        var pageHeader = _ReactTestUtils2.default.renderIntoDocument(_react2.default.createElement(_pageHeader2.default, null));
        var pageHeaderwithProps = _ReactTestUtils2.default.renderIntoDocument(_react2.default.createElement(_pageHeader2.default, input));

        it('renders the tag', function () {
            expect(resultTag.type).toBe('div');
        });

        it('verify the className', function () {
            expect(resultTag.props.className).toBe('container-fluid pageHeader');
        });

        it('find element with tag', function () {
            var divElm = _ReactTestUtils2.default.scryRenderedDOMComponentsWithTag(pageHeader, 'div');
            expect(divElm.length).toEqual(5);
            var btnElm = _ReactTestUtils2.default.scryRenderedDOMComponentsWithTag(pageHeader, 'button');
            expect(btnElm.length).toEqual(1);
        });

        it('find element with class and default props', function () {
            var divElmArr = _ReactTestUtils2.default.scryRenderedDOMComponentsWithClass(pageHeader, 'row');
            expect(divElmArr.length).toEqual(1);
            // findRenderedDOMComponentsWithClass
            var divtElm1 = _ReactTestUtils2.default.findRenderedDOMComponentWithClass(pageHeader, 'page-title text-left');
            expect(divtElm1.className).toBe('page-title text-left');
            expect(divtElm1.textContent).toEqual('CaseName');
            var btnElm1 = _ReactTestUtils2.default.findRenderedDOMComponentWithClass(pageHeader, 'primary-btn pull-right');
            expect(btnElm1.className).toBe('primary-btn pull-right');
            expect(btnElm1.textContent).toEqual('Save Form');
        });

        it('check default props', function () {
            expect(pageHeader.props.pageTitle).toEqual('CaseName');
        });

        it('find element with class and object passed as props', function () {
            var divtElm1 = _ReactTestUtils2.default.findRenderedDOMComponentWithClass(pageHeaderwithProps, 'page-title text-left');
            expect(divtElm1.className).toBe('page-title text-left');
            expect(divtElm1.textContent).toEqual('testPageTitle');
        });
    });
});