(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['react', '../TextArea.js', 'react-dom/lib/ReactTestUtils'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('react'), require('../TextArea.js'), require('react-dom/lib/ReactTestUtils'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.react, global.TextArea, global.ReactTestUtils);
        global.TextArea_test = mod.exports;
    }
})(this, function (_react, _TextArea, _ReactTestUtils) {
    'use strict';

    var _react2 = _interopRequireDefault(_react);

    var _TextArea2 = _interopRequireDefault(_TextArea);

    var _ReactTestUtils2 = _interopRequireDefault(_ReactTestUtils);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var props = { label: 'hi', rows: 2, name: 'Text' };

    describe('TextArea', function () {

        var renderedComp = _ReactTestUtils2.default.createRenderer();
        var compRendered = renderedComp.render(_react2.default.createElement(_TextArea2.default, props));
        var resultTag = renderedComp.getRenderOutput();

        it('renders the tag', function () {
            expect(resultTag.type).toBe('div');
        });

        it('verify the className', function () {
            expect(resultTag.props.className).toBe('form-group');
        });
    });
});