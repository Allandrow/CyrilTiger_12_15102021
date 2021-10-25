import React from 'react'
import Headline from './headline'

export default {
  component: Headline,
  title: 'Sportsee/Dashboard/Headline'
}

const Template = (args) => <Headline {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'Cyril'
}
