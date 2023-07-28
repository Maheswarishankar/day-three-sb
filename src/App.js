
import './App.css';
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import {BrowserRouter, Routes,Route,Navigate} from 'react-router-dom'
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import NestedExample from './components/NestedExample';
import Profile from './components/Card Components/NestedComponents/Profile';
import Account from './components/Card Components/NestedComponents/Account';

export const userContext = React.createContext()
function App() {
  let data = {    
    earningsMonthly:"40,000",
    earningsYearly:"215,000",
    task:"50",
    pendingRequest:"18",

  }
let [users,setUsers]=useState([
{
    name:"Mahi",
    email:"mahi@gmail.com",
    mobile:"8734562419",
    batch:"B38WE",
    timings:"11to1pm",
},
{
  name:"Nawin",
  email:"Nawin@gmail.com",
  mobile:"9834276518",
  batch:"B38WE",
  timings:"2pmto4pm",
},
{
  name:"Siddhu",
  email:"siddhu@gmail.com",
  mobile:"7834562729",
  batch:"B38WE",
  timings:"4pmto6pm",
},
{
  name:"Shan",
  email:"shan@gmail.com",
  mobile:"9799345690",
  batch:"B38WE",
  timings:"6pmto8pm",
}
])
  return <div id="wrapper">
<BrowserRouter>
  <Sidebar/>
  <userContext.Provider value={{data,users,setUsers}}>
  <Routes>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path= '/add-user' element={<AddUser/>}/>
    <Route path='/edit-user/:id' element={<EditUser/>}/>
    <Route path='/nested-example' element={<NestedExample/>}>
      <Route path='account' element={<Account/>}/>
      <Route path='profile' element={<Profile/>}/>
    </Route>
    <Route path='*' element={<Navigate to ={'/dashboard'}/>}/>
  </Routes>
  </userContext.Provider>
</BrowserRouter>
  </div>  
}
export default App;
