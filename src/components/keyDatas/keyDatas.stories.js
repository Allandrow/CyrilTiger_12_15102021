import React from 'react'
import KeyDatas from './keyDatas'

export default {
  component: KeyDatas,
  title: 'sportsee/Dashboard/Keydatas'
}

const Template = (args) => <KeyDatas {...args} />

export const Default = Template.bind({})
Default.args = {
  calorieCount: 1930,
  proteinCount: 155,
  carbohydrateCount: 290,
  lipidCount: 50
}
