import React from 'react';
import Alert from '../Alert.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('Alert', function() {

    const renderedComp = TestUtils.createRenderer()
    const compRendered = renderedComp.render(<Alert />)
    const resultTag = renderedComp.getRenderOutput()

    it('renders the tag', function() {
        expect(resultTag.type).toBe('div')
    })

    it('verify the className', function() {
        expect(resultTag.props.className). toBe('row')
    })
})