(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['react', '../PageHeader.js', 'react-dom/lib/ReactTestUtils'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('react'), require('../PageHeader.js'), require('react-dom/lib/ReactTestUtils'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.react, global.PageHeader, global.ReactTestUtils);
        global.PageHeader_test = mod.exports;
    }
})(this, function (_react, _PageHeader, _ReactTestUtils) {
    'use strict';

    var _react2 = _interopRequireDefault(_react);

    var _PageHeader2 = _interopRequireDefault(_PageHeader);

    var _ReactTestUtils2 = _interopRequireDefault(_ReactTestUtils);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    describe('PageHeader', function () {
        var renderedComp = _ReactTestUtils2.default.createRenderer();
        var compRendered = renderedComp.render(_react2.default.createElement(_PageHeader2.default, null));
        var result_tag = renderedComp.getRenderOutput();

        it('renders the tag', function () {
            expect(result_tag.type).toBe('div');
        });

        it('verify the className', function () {
            expect(result_tag.props.className).toBe('container-fluid pageHeader');
        });
    });
});