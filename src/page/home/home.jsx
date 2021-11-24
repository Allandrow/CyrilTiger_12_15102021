import React from 'react'
import MainLayout from '../../layout/mainLayout'
import userList from '../../data/userList.js'
import { Link } from 'react-router-dom'

/**
 * TODO
 * @returns
 */
const Home = () => {
  return (
    <MainLayout>
      <section>
        <h1>SportSee User List :</h1>
        <ul>
          {userList.map((user) => (
            <Link key={user.id} to={`user/${user.id}`}>
              {user.name}
            </Link>
          ))}
        </ul>
      </section>
    </MainLayout>
  )
}

export default Home
