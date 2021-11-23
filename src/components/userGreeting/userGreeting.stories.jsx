import React from 'react'
import UserGreeting from './userGreeting'

export default {
  title: 'SportSee/Dashboard/Headline',
  component: UserGreeting
}

const Template = (args) => <UserGreeting {...args} />

export const Default = Template.bind({})

Default.args = {
  name: 'Cyril'
}
