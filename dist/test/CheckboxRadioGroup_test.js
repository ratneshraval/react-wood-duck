(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['react', '../CheckboxRadioGroup.js', 'react-dom/lib/ReactTestUtils'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('react'), require('../CheckboxRadioGroup.js'), require('react-dom/lib/ReactTestUtils'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.react, global.CheckboxRadioGroup, global.ReactTestUtils);
        global.CheckboxRadioGroup_test = mod.exports;
    }
})(this, function (_react, _CheckboxRadioGroup, _ReactTestUtils) {
    'use strict';

    var _react2 = _interopRequireDefault(_react);

    var _CheckboxRadioGroup2 = _interopRequireDefault(_CheckboxRadioGroup);

    var _ReactTestUtils2 = _interopRequireDefault(_ReactTestUtils);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var props = { label: 'hi', type: 'radio', name: 'CheckboxRadioGroup', options: [] };

    describe('CheckboxRadioGroup', function () {

        var renderedComp = _ReactTestUtils2.default.createRenderer();
        var compRendered = renderedComp.render(_react2.default.createElement(_CheckboxRadioGroup2.default, props));
        var resultTag = renderedComp.getRenderOutput();

        it('renders the tag', function () {
            expect(resultTag.type).toBe('fieldset');
        });

        it('verify the className', function () {
            expect(resultTag.props.className).toBe('fieldset-inputs sans col-md-4 col-sm-6 col-xs-12');
        });
    });
});