import React, { useState } from 'react'
import LocalState from '../../components/statemanagement/Localstate'
import Header from '../../components/statemanagement/Globalstate/Header'
import Profile from '../../components/statemanagement/Globalstate/Profile'
import UserProvider from '../../components/statemanagement/Globalstate/UserContext'
import UseState from '../../components/statemanagement/UseState';
import ContextApi from '../../components/contextapi_09-07-2026/ContextAPI'

const StatemanagementPage = () => {
  return (
    <div>
      <ContextApi/>

       <UseState />
      <LocalState/>

       <UserProvider>
      <div style={{ textAlign: "center" }}>
        <h1>Global State Example</h1>

        <Header />
        <Profile />
      </div>
    </UserProvider>
    
    </div>
  )
}

export default StatemanagementPage
 
