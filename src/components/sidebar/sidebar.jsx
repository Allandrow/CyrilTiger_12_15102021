import React from 'react'
import ZenIcon from './zen.svg'
import BikeIcon from './bike.svg'
import FitIcon from './fit.svg'
import SwimIcon from './swim.svg'
import SidebarIcon from '../sidebarIcon/sidebarIcon'

/**
 * Sidebar component
 * @returns {ReactElement} React Component
 */
const Sidebar = () => {
  return (
    <aside className="bg-dark grid place-items-center relative w-28">
      <ul className="grid gap-y-8 place-items-center">
        <SidebarIcon url={ZenIcon} altText={'Méditation'} />
        <SidebarIcon url={SwimIcon} altText={'Natation'} />
        <SidebarIcon url={BikeIcon} altText={'Cyclisme'} />
        <SidebarIcon url={FitIcon} altText={'Musculation'} />
      </ul>
      <span className="text-white writing-vert transform rotate-180 text-xs font-medium text-center self-end absolute bottom-8">
        Copyright, SportSee 2020
      </span>
    </aside>
  )
}

export default Sidebar
