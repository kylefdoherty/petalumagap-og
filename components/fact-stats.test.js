import React from 'react'
import { shallow, mount, render } from 'enzyme'

import { FactStat } from './facts-stats'

const setup = (Component, props, fullMount = false) => {
  let enzymeWrapper

  if (!fullMount) {
    enzymeWrapper = shallow(<Component {...props} />)
  }

  if (fullMount) {
    enzymeWrapper = mount(<Component {...props} />)
  }

  return {
    props,
    enzymeWrapper,
  }
}

const initialProps = {
  stat: '80',
  fact: 'Plus Vineyards',
  backgroundColor: 'honeydew',
}

// describe('FactStat', () => {
//   test('countup method works correctly', () => {
//     const { enzymeWrapper } = setup(FactStat, initialProps)

//     expect(enzymeWrapper.find('.ollie-checkbox-grid').children()).toHaveLength(6)
//   })
// })
