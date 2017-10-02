import React from 'react';
import PageHeader from '../PageHeader.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('PageHeader', function()
{
    const renderedComp = TestUtils.createRenderer()
    const compRendered = renderedComp.render(<PageHeader />)
    const result_tag = renderedComp.getRenderOutput()

    it('renders the tag', function() {
        expect(result_tag.type).toBe('div')
    })

    it('verify the className', function(){
        expect(result_tag.props.className). toBe('container-fluid pageHeader')
    })

})