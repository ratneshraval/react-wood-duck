import React from 'react';
import DropDownField from '../DropDownField.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

let props = {name:'hi', options:[]};

describe('DropDownField', function() {

    const renderedComp = TestUtils.createRenderer()
    const compRendered = renderedComp.render(<DropDownField {...props}/>)
    const resultTag = renderedComp.getRenderOutput()

    it('renders the tag', function() {
        expect(resultTag.type).toBe('div')
    })

    it('verify the className', function() {
        expect(resultTag.props.className). toBe('form-group')
    })
})