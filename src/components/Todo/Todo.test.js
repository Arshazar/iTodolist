import React from 'react'
import { shallow } from 'enzyme'
import Todo from './Todo'

it('renders todo component', () => {
    expect(shallow(<Todo />)).toMatchSnapshot()
})
