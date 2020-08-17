import React from 'react'
import { shallow } from 'enzyme'
import Navigator from './Navigator'

it('renders navigator component', () => {
    expect(shallow(<Navigator />)).toMatchSnapshot()
})
