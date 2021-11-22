import React from 'react'
import Sidebar from './sidebar'

export default {
  component: Sidebar,
  title: 'SportSee/Sidebar'
}

const Template = () => (
  <div style={{ height: '600px' }}>
    <Sidebar />
  </div>
)

export const Default = Template.bind({})
