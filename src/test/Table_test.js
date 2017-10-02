import React from 'react';
import Table from '../Table.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('Table', function() {

    const renderedComp = TestUtils.createRenderer()
    const compRendered = renderedComp.render(<Table />)
    const resultTag = renderedComp.getRenderOutput()

    it('renders the tag', function() {
        expect(resultTag.type).toBe('table')
    })

    it('verify the className', function() {
        expect(resultTag.props.className). toBe('table table-hover table-striped')
    })
})