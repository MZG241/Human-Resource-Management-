import React from 'react'
import { addUser } from './userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';





const Create = () => {

const [name,setName] = useState('')
const [job,setJob] = useState('')
const [salary,setSalary] = useState('')
const users = useSelector((state) => state.users)
const dispatch = useDispatch();
const navigate = useNavigate()

const handleSubmit = (event) => {
event.preventDefault();
dispatch(addUser({id: users[users.length - 1 ].id + 1, name, job,salary}))
alert("Added Successfully");
navigate('/')

}



  return (
    
<>
<form  onSubmit={handleSubmit}   className="max-w-sm mx-auto p-10 shadow-gray-200 mt-7 shadow-md">
    <h2 className='text-center font-bold text-xl mb-5'>Add New Employee</h2>
 
  <div className="mb-5">
<label htmlFor="name">Full Name</label>
  <input type="text" onChange={e => setName(e.target.value)} name='name' autoComplete='off'  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
  </div>
  <div className="mb-5">
  <label htmlFor="job">Job</label>
  <input type="text" onChange={e => setJob(e.target.value)}  name='job' autoComplete='off'  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
  </div>
  <div className="mb-5">
  <label htmlFor="salary">Salary</label>
  <input type="text" onChange={e => setSalary(e.target.value)}  name='salary' autoComplete='off'  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
  </div>

  <div className="mb-5">
  <button  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
 
 </div>
 
  
</form>
</>
  )
}

export default Create