import React from 'react'
import Navigation from './navigation'

export default {
  component: Navigation,
  title: 'SportSee/components/Navigation',
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#020203' }}><Story /></div>
    )
  ]
}

const Template = (args) => <Navigation {...args} />

export const Default = Template.bind({})
