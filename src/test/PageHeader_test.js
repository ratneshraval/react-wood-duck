import React from 'react';
import PageHeader from '../pageHeader.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('PageHeader', function() {
    
    var input = {
        pageTitle: 'testPageTitle'
    };
    const renderedComp = TestUtils.createRenderer()
    const compRendered = renderedComp.render(<PageHeader />)
    const resultTag = renderedComp.getRenderOutput()
    const pageHeader = TestUtils.renderIntoDocument(<PageHeader />);
    const pageHeaderwithProps = TestUtils.renderIntoDocument(<PageHeader {...input}/>);

    it('renders the tag', function() {
        expect(resultTag.type).toBe('div')
    })

    it('verify the className', function() {
        expect(resultTag.props.className). toBe('container-fluid pageHeader')
    })

    it('find element with tag', function() {
        let divElement = TestUtils.scryRenderedDOMComponentsWithTag(pageHeader, 'div');
        expect(divElement.length).toEqual(5);
        let buttonElement = TestUtils.scryRenderedDOMComponentsWithTag(pageHeader, 'button');
        expect(buttonElement.length).toEqual(1);
    });

    it('find element with class and default props', function () {
        let divElementArr = TestUtils.scryRenderedDOMComponentsWithClass(pageHeader, 'row');
        expect(divElementArr.length).toEqual(1);
        var divElement1 = TestUtils.findRenderedDOMComponentWithClass(pageHeader, 'page-title text-left');
        expect(divElement1.className). toBe('page-title text-left')
        expect(divElement1.textContent).toEqual('CaseName');
        var buttonElement1 = TestUtils.findRenderedDOMComponentWithClass(pageHeader, 'primary-btn pull-right');
        expect(buttonElement1.className). toBe('primary-btn pull-right')
        expect(buttonElement1.textContent).toEqual('Save Form');

    });

    it('check default props', function () {
        expect(pageHeader.props.pageTitle).toEqual('CaseName');
    });
    
    it('find element with class and object passed as props', function () {
        var divElement1 = TestUtils.findRenderedDOMComponentWithClass(pageHeaderwithProps, 'page-title text-left');
        expect(divElement1.className). toBe('page-title text-left')
        expect(divElement1.textContent).toEqual('testPageTitle');

    });
})