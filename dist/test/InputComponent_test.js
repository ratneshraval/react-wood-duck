(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['react', '../InputComponent.js', 'react-dom/lib/ReactTestUtils'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('react'), require('../InputComponent.js'), require('react-dom/lib/ReactTestUtils'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.react, global.InputComponent, global.ReactTestUtils);
        global.InputComponent_test = mod.exports;
    }
})(this, function (_react, _InputComponent, _ReactTestUtils) {
    'use strict';

    var _react2 = _interopRequireDefault(_react);

    var _InputComponent2 = _interopRequireDefault(_InputComponent);

    var _ReactTestUtils2 = _interopRequireDefault(_ReactTestUtils);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    describe('InputComponent', function () {

        var renderedComp = _ReactTestUtils2.default.createRenderer();
        var compRendered = renderedComp.render(_react2.default.createElement(_InputComponent2.default, null));
        var resultTag = renderedComp.getRenderOutput();

        it('renders the tag', function () {
            expect(resultTag.type).toBe('div');
        });

        it('verify the className', function () {
            expect(resultTag.props.className).toBe('form-group');
        });
    });
});