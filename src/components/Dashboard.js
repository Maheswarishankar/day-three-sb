import React,{useContext} from 'react'
import BasicCards from './Card Components/BasicCards'
import ProgressCard from './Card Components/ProgressCard'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../App';

function Dashboard() {
    let context = useContext(userContext)
    let navigate=useNavigate()
    let handleDelete = (i)=>{ 
     let newArray = [...context.users]//deep copy the main array
     newArray.splice(i,1)//delete the element in the new array
     context.setUsers(newArray) //update the new array to the state function         
    }
  return <> 
  
  {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">                

                {/* <!-- Begin Page Content --> */}
                <div className="container-fluid">

                    {/* <!-- Page Heading --> */}
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>
                    {/* <!-- Content Row --> */}
                    <div className="row">
                        <BasicCards lable='Earnings (Monthly)' value={context.data.earningsMonthly} border='primary' icon='fas fa-calendar'/>
                        <BasicCards lable='Earnings (Annual)' value={context.data.earningsYearly} border='success' icon='fas fa-dollar-sign'/>
                        <ProgressCard lable='Tasks' value={context.data.task} border='info' icon='fas fa-clipboard-list'/>
                        <BasicCards lable='Pending Requests' value={context.data.pendingRequest} border='warning' icon='fas fa-comments '/>   
                          
                    </div>
                </div>
                <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Batch</th>
          <th>Timings</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
           context.users.map((e,i)=>{
                return<tr key={i}>
                    <td>{i+1}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.mobile}</td>
                    <td>{e.batch}</td>
                    <td>{e.timings}</td>
                    <td>
                        <Button variant="primary" onClick={()=>navigate(`/edit-user/${i}`)}><i className="fas fa-pen-to-square"></i>&nbsp; Edit</Button>
                        &nbsp;
                        &nbsp;
                        <Button variant="danger" onClick={()=>handleDelete(i)}><i className="fas fa-trash"></i>&nbsp; Delete</Button>
                    </td>
                </tr>
            })
        }
      </tbody>
    </Table>
          </div>
        </div>
  
  </>
}
export default Dashboard