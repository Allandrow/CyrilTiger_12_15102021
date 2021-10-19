import React from 'react'
import ZenIcon from './zen.svg'
import BikeIcon from './bike.svg'
import FitIcon from './fit.svg'
import SwimIcon from './swim.svg'
import SidebarIcon from '../sidebarIcon/sidebarIcon'

const Sidebar = () => {
  return (
    <aside className="flex px-6 bg-dark items-center flex-col pb-14">
      <ul className="flex flex-col gap-5 flex-1 justify-center">
        <SidebarIcon icon={ZenIcon} altText={'Méditation'} />
        <SidebarIcon icon={SwimIcon} altText={'Natation'} />
        <SidebarIcon icon={BikeIcon} altText={'Cyclisme'} />
        <SidebarIcon icon={FitIcon} altText={'Musculation'} />
      </ul>
      <span className="text-white writing-vert transform rotate-180 text-xs font-medium">Copyright, SportSee 2020</span>
    </aside>
  )
}

export default Sidebar
