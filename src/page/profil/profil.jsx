import React from 'react'
import Dashboard from '../../components/dashboard/dashboard'
import MainLayout from '../../layout/mainLayout'
import Sidebar from '../../components/sidebar/sidebar'

const Profil = () => {
  return (
    <MainLayout>
      <main className="flex h-full">
        <Sidebar />
        <Dashboard />
      </main>
    </MainLayout>
  )
}

export default Profil
