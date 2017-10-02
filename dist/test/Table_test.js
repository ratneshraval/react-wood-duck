(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['react', '../Table.js', 'react-dom/lib/ReactTestUtils'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('react'), require('../Table.js'), require('react-dom/lib/ReactTestUtils'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.react, global.Table, global.ReactTestUtils);
        global.Table_test = mod.exports;
    }
})(this, function (_react, _Table, _ReactTestUtils) {
    'use strict';

    var _react2 = _interopRequireDefault(_react);

    var _Table2 = _interopRequireDefault(_Table);

    var _ReactTestUtils2 = _interopRequireDefault(_ReactTestUtils);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    describe('Table', function () {

        var renderedComp = _ReactTestUtils2.default.createRenderer();
        var compRendered = renderedComp.render(_react2.default.createElement(_Table2.default, null));
        var resultTag = renderedComp.getRenderOutput();

        it('renders the tag', function () {
            expect(resultTag.type).toBe('table');
        });

        it('verify the className', function () {
            expect(resultTag.props.className).toBe('table table-hover table-striped');
        });
    });
});