import React from 'react'
import ZenIcon from './zen.svg'
import BikeIcon from './bike.svg'
import FitIcon from './fit.svg'
import SwimIcon from './swim.svg'
import SidebarIcon from '../sidebarIcon/sidebarIcon'

/**
 * TODO
 * @returns
 */
const Sidebar = () => {
  return (
    <aside className="bg-dark order-2 col-span-2 grid grid-cols-4 py-8 gap-y-8 w-full xl:order-1 xl:place-items-center xl:pb-14 xl:px-4">
      <ul className="grid grid-cols-4 col-span-4 place-items-center xl:grid xl:grid-cols-1 xl:gap-y-8">
        <SidebarIcon url={ZenIcon} altText={'Méditation'} />
        <SidebarIcon url={SwimIcon} altText={'Natation'} />
        <SidebarIcon url={BikeIcon} altText={'Cyclisme'} />
        <SidebarIcon url={FitIcon} altText={'Musculation'} />
      </ul>
      <span className="text-white xl:writing-vert xl:transform xl:rotate-180 text-xs font-medium text-center col-span-4 xl:self-end">
        Copyright, SportSee 2020
      </span>
    </aside>
  )
}

export default Sidebar
