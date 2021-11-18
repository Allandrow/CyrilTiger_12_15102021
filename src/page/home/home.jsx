import React from 'react'
import MainLayout from '../../layout/mainLayout'
import userList from '../../data/userList.js'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <MainLayout>
      <h1>SportSee User List :</h1>
      <ul>
        {userList.map((user) => (
          <Link key={user.id} to={`/about/${user.id}`}>
            {user.name}
          </Link>
        ))}
      </ul>
    </MainLayout>
  )
}

export default Home
