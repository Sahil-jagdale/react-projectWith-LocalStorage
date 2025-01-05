import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashBoard from './components/DashBoard/EmployeeDashBoard'
import AdminDashboard from './components/DashBoard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)

  const authData = useContext(AuthContext)
  console.log(authData.employees)

  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
    } else if (email == 'user@me.com' && password == '123') {
      setUser('employee')
    } else {
      console.log('invalid credentials.')
    }
  }
  handleLogin()

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  // })


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashBoard />}
    </>
  )
}

export default App