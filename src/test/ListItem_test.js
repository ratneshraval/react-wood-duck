import React from 'react';
import ListItem from '../ListItem.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('ListItem', function() {

    const renderedComp = TestUtils.createRenderer()
    const compRendered = renderedComp.render(<ListItem />)
    const resultTag = renderedComp.getRenderOutput()

    it('renders the tag', function() {
        expect(resultTag.type).toBe('div')
    })

    it('verify the className', function() {
        expect(resultTag.props.className). toBe('list-item')
    })
})