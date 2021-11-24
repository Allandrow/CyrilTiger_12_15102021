import React from 'react'
import Dashboard from '../../components/dashboard/dashboard'
import MainLayout from '../../layout/mainLayout'
import Sidebar from '../../components/sidebar/sidebar'

/**
 * User Profile Page Template
 * @returns {ReactElement} React Component
 */
const Profil = () => {
  return (
    <MainLayout>
      <main className="h-full grid xl:grid-flow-col">
        <Sidebar />
        <Dashboard />
      </main>
    </MainLayout>
  )
}

export default Profil
