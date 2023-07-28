import React from 'react'
import { Outlet,Link } from 'react-router-dom'

function NestedExample() {
  return <div style={{display:"flex", flexDirection:"column"}}>
  <h2>Nested Example for Nested Routing</h2>

  <ul>
    <Link to = 'profile'>
        <li>
        <div>Profile</div>
    </li>
    </Link>
    <Link to = 'Account'>
    <li>
        <div>Account</div>
    </li>
    </Link>
    <Link to = '/nested-example'>
    <li>
        <div>Nested Home</div>
    </li>
    </Link>
  </ul>
  <Outlet/>
  </div>
}

export default NestedExample