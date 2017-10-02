import React from 'react';
import InputComponent from '../InputComponent.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('InputComponent', function() {
    
    const renderedComp = TestUtils.createRenderer()
    const compRendered = renderedComp.render(<InputComponent />)
    const resultTag = renderedComp.getRenderOutput()

    it('renders the tag', function() {
        expect(resultTag.type).toBe('div')
    })
   
    it('verify the className', function() {
        expect(resultTag.props.className). toBe('form-group')
    })
})