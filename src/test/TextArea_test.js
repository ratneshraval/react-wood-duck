import React from 'react';
import TextArea from '../TextArea.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

let props = {label:'hi', rows:2, name:'Text' };

describe('TextArea', function() {

    const renderedComp = TestUtils.createRenderer()
    const compRendered = renderedComp.render(<TextArea {...props}/>)
    const resultTag = renderedComp.getRenderOutput()

    it('renders the tag', function() {
        expect(resultTag.type).toBe('div')
    })

    it('verify the className', function() {
        expect(resultTag.props.className). toBe('form-group')
    })
})