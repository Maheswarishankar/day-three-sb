import React from 'react'
import { useParams } from 'react-router-dom'
import { useState ,useEffect,useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../App';

function EditUser() {
  let context = useContext(userContext)
  let {id}= useParams()   
  let [name,setName]=useState('')
  let [email,setEmail]=useState('')
  let [mobile,setMobile]=useState('')
  let [batch,setBatch]=useState('')
  let [timings,setTimings]=useState('')

  let navigate = useNavigate()

  useEffect(()=>{
    if(id)
    {
      setName(context.users[id].name)
      setEmail(context.users[id].email)
      setMobile(context.users[id].mobile)
      setBatch(context.users[id].batch)
      setTimings(context.users[id].timings)
    }
    else
    {
      navigate('/dashboard')
    }

  },[])

  let handleSubmit = ()=>{    
    let newData = {name,email,mobile,batch,timings}
    let newArray=[...context.users]
    newArray.splice(id,1,newData)
    context.setUsers(newArray)
    navigate('/dashboard')
  } 
  return <>  
  
  <div className="container-fluid">
    <h1>Edit Users</h1>
  <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text"value={name} placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>        
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"value={email} placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>        
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text"value={mobile} placeholder="Enter Mobile" onChange={(e)=>setMobile(e.target.value)}/>        
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" value={batch}placeholder="Enter Batch" onChange={(e)=>setBatch(e.target.value)}/>        
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Session Timmings</Form.Label>
        <Form.Select defaultValue={"timings"} onChange={(e)=>setTimings(e.target.value)}>
          <option value="0" disabled>Session Timmings</option>
          <option value="10am-12pm">10am-12pm</option>
          <option value="12pm-2pm">12pm-2pm</option>
          <option value="2pm-4pm">2pm-4pm</option>
          <option value="4pm-6pm">4pm-6pm</option>
        </Form.Select>
      </Form.Group>
      
      <Button variant="primary" onClick={()=>handleSubmit()}>Submit</Button>
    </Form>
  </div>    
  </>
}

export default EditUser





   
  