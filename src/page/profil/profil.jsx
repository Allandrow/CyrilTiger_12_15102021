import React from 'react'
import Dashboard from '../../components/dashboard/dashboard'
import MainLayout from '../../layout/mainLayout'
import Sidebar from '../../components/sidebar/sidebar'

const Profil = () => {
  return (
    <MainLayout>
      <main className="h-full grid grid-cols-2">
        <Sidebar />
        <Dashboard />
      </main>
    </MainLayout>
  )
}

export default Profil
