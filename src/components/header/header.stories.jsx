import React from 'react'
import Header from './header'
import * as NavigationStories from '../navigation/navigation.stories'

export default {
  title: 'SportSee/Header',
  component: Header
}

const Template = () => <Header />

export const Default = Template.bind({})

Default.args = {
  ...NavigationStories.args
}
