import React from 'react';
import DatePicker from '../DatePicker.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('DatePicker', function() {

    const renderedComp = TestUtils.createRenderer()
    const compRendered = renderedComp.render(<DatePicker />)
    const resultTag = renderedComp.getRenderOutput()

    it('renders the tag', function() {
        expect(resultTag.type).toBe('div')
    })

    it('verify the className', function() {
        expect(resultTag.props.className). toBe('form-group')
    })
})