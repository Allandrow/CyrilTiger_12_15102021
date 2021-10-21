import React from 'react'
import SidebarIcon from './sidebarIcon'
import ZenIcon from '../sidebar/zen.svg'
import BikeIcon from '../sidebar/bike.svg'
import FitIcon from '../sidebar/fit.svg'
import SwimIcon from '../sidebar/swim.svg'

export default {
  title: 'SportSee/components/SidebarIcon',
  component: SidebarIcon
}

const Template = (args) => <SidebarIcon {...args} />

export const Zen = Template.bind({})
Zen.args = {
  url: ZenIcon,
  altText: 'Méditation'
}

export const Swim = Template.bind({})
Swim.args = {
  url: SwimIcon,
  altText: 'Natation'
}

export const Bike = Template.bind({})
Bike.args = {
  url: BikeIcon,
  altText: 'Cyclisme'
}

export const Fit = Template.bind({})
Fit.args = {
  url: FitIcon,
  altText: 'Musculation'
}
