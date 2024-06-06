{/* UPDATE FILE /*}


import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './userReducer';




const Edit = () => {

const {id} = useParams();
const users = useSelector((state) => state.users);
const existingUser = users.filter(f => f.id == id);
const {name,job,salary} = existingUser[0];
const [uname,setName] = useState(name)
const [updateJob,setJob] = useState(job)
const [updateSalary,setSalary] = useState(salary)
const dispatch = useDispatch();
const navigate = useNavigate();



const handleUpdate = (event) => {
event.preventDefault();
dispatch(updateUser({
id: id,
name: uname,
job: updateJob,
salary: updateSalary

}))
navigate('/');
}


  return (
    
    <>
   

   
<form  onSubmit={handleUpdate}     className="max-w-sm  mx-auto p-10 bg-white shadow-gray-200 mt-7 shadow-lg">
    <h2 className='text-center font-bold text-xl mb-5'>Edit Employee Data</h2>
 
  <div className="mb-5">
<label htmlFor="name">Full Name</label>
  <input type="text"  name='name'  value={uname}   onChange={e =>setName(e.target.value)}                autoComplete='off'  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
  </div>
  <div className="mb-5">
  <label htmlFor="job">Job</label>
  <input type="text"   name='job' value={updateJob}     onChange={e =>setJob(e.target.value)}   autoComplete='off'  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
  </div>
  <div className="mb-5">
  <label htmlFor="salary">Salary</label>
  <input type="text"   name='salary' value={updateSalary}    onChange={e =>setSalary(e.target.value)}    autoComplete='off'  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
  </div>

  <div className="mb-5">
  <button  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
 
 </div>
 
  
</form>

</>
  )
}

export default Edit
