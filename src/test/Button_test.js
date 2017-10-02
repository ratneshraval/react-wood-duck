import React from 'react';
import Button from '../Button.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('Button', function() {

    const renderedComp = TestUtils.createRenderer()
    const compRendered = renderedComp.render(<Button />)
    const resultTag = renderedComp.getRenderOutput()

    it('renders the tag', function() {
        expect(resultTag.type).toBe('div')
    })

    it('verify the className', function() {
        expect(resultTag.props.className). toBe('row')
    })
})