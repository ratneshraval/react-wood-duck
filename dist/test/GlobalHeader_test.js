(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['react', '../GlobalHeader.js', 'react-dom/lib/ReactTestUtils'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('react'), require('../GlobalHeader.js'), require('react-dom/lib/ReactTestUtils'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.react, global.GlobalHeader, global.ReactTestUtils);
        global.GlobalHeader_test = mod.exports;
    }
})(this, function (_react, _GlobalHeader, _ReactTestUtils) {
    'use strict';

    var _react2 = _interopRequireDefault(_react);

    var _GlobalHeader2 = _interopRequireDefault(_GlobalHeader);

    var _ReactTestUtils2 = _interopRequireDefault(_ReactTestUtils);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    describe('Global Header', function () {

        var input = {
            logo: 'testlogo',
            profileName: 'testProfileName',
            profileAvatar: 'testProfileAvatar'
        };
        var renderedComp = _ReactTestUtils2.default.createRenderer();
        var compRendered = renderedComp.render(_react2.default.createElement(_GlobalHeader2.default, null));
        var resultTag = renderedComp.getRenderOutput();
        var header = _ReactTestUtils2.default.renderIntoDocument(_react2.default.createElement(_GlobalHeader2.default, null));
        var headerwithProps = _ReactTestUtils2.default.renderIntoDocument(_react2.default.createElement(_GlobalHeader2.default, input));

        it('renders the tag', function () {
            expect(resultTag.type).toBe('header');
        });

        it('verify the className', function () {
            expect(resultTag.props.className).toBe('container-fluid');
        });

        it('find element with tag', function () {
            var divElm = _ReactTestUtils2.default.scryRenderedDOMComponentsWithTag(header, 'div');
            expect(divElm.length).toEqual(5);
            var ulElm = _ReactTestUtils2.default.scryRenderedDOMComponentsWithTag(header, 'ul');
            expect(ulElm.length).toEqual(1);
            var liElm = _ReactTestUtils2.default.scryRenderedDOMComponentsWithTag(header, 'li');
            expect(liElm.length).toEqual(6);
        });

        it('find element with class and default props', function () {
            var divElmArr = _ReactTestUtils2.default.scryRenderedDOMComponentsWithClass(header, 'row');
            expect(divElmArr.length).toEqual(1);
            // findRenderedDOMComponentsWithClass
            var divtElm1 = _ReactTestUtils2.default.findRenderedDOMComponentWithClass(header, 'logo');
            expect(divtElm1.className).toBe('logo');
            expect(divtElm1.textContent).toEqual('CWDS');
            var ulElm1 = _ReactTestUtils2.default.findRenderedDOMComponentWithClass(header, 'header-actions');
            expect(ulElm1.className).toBe('header-actions');
            var pElm1 = _ReactTestUtils2.default.findRenderedDOMComponentWithClass(header, 'profile');
            expect(pElm1.className).toBe('profile');
            expect(pElm1.textContent).toEqual(' Profile Name');
            var dElm1 = _ReactTestUtils2.default.findRenderedDOMComponentWithClass(header, 'profile-avatar');
            expect(dElm1.className).toBe('profile-avatar');
            expect(dElm1.textContent).toEqual('PN');
            var iEle1 = _ReactTestUtils2.default.findRenderedDOMComponentWithClass(header, 'fa fa-search');
            expect(iEle1.className).toBe('fa fa-search');
            var iEle2 = _ReactTestUtils2.default.findRenderedDOMComponentWithClass(header, 'fa fa-plus');
            expect(iEle2.className).toBe('fa fa-plus');
            var iEle3 = _ReactTestUtils2.default.findRenderedDOMComponentWithClass(header, 'fa fa-bell');
            expect(iEle3.className).toBe('fa fa-bell');
        });

        it('check default props', function () {
            expect(header.props.logo).toEqual('CWDS');
            expect(header.props.profileName).toEqual('Profile Name');
            expect(header.props.profileAvatar).toEqual('PN');
        });

        it('find element with class and object passed as props', function () {
            var divtElm1 = _ReactTestUtils2.default.findRenderedDOMComponentWithClass(headerwithProps, 'logo');
            expect(divtElm1.className).toBe('logo');
            expect(divtElm1.textContent).toEqual('testlogo');
            var pElm1 = _ReactTestUtils2.default.findRenderedDOMComponentWithClass(headerwithProps, 'profile');
            expect(pElm1.className).toBe('profile');
            expect(pElm1.textContent).toEqual(' testProfileName');
            var dElm1 = _ReactTestUtils2.default.findRenderedDOMComponentWithClass(headerwithProps, 'profile-avatar');
            expect(dElm1.className).toBe('profile-avatar');
            expect(dElm1.textContent).toEqual('testProfileAvatar');
        });
    });
});