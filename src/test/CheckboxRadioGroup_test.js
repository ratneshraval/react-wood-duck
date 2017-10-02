import React from 'react';
import CheckboxRadioGroup from '../CheckboxRadioGroup.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

let props = {label:'hi', type:'radio', name:'CheckboxRadioGroup', options: []};

describe('CheckboxRadioGroup', function() {

    const renderedComp = TestUtils.createRenderer()
    const compRendered = renderedComp.render(<CheckboxRadioGroup {...props}/>)
    const resultTag = renderedComp.getRenderOutput()

    it('renders the tag', function() {
        expect(resultTag.type).toBe('fieldset')
    })

    it('verify the className', function() {
        expect(resultTag.props.className). toBe('fieldset-inputs sans col-md-4 col-sm-6 col-xs-12')
    })
})