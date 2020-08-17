import React from 'react'
import { shallow } from 'enzyme'
import Toolbar from './Toolbar'

it('renders Toolbar component', () => {
    expect(shallow(<Toolbar />)).toMatchSnapshot()
})
