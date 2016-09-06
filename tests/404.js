import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import NotFound from '../views/404'

describe('NotFound', () => {
  it('renders 404', () => {
    const NotFoundDocument = TestUtils.renderIntoDocument(<NotFound />)
    const NotFoundDOMNode = ReactDOM.findDOMNode(NotFoundDocument)
    expect(NotFoundDOMNode.textContent).toEqual('404')
  })
})
