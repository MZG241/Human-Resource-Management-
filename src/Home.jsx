import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser } from './userReducer';



function Home() {
    const users = useSelector((state) => state.users);

const dispatch = useDispatch();

const handleDelete = (id) => {
dispatch(deleteUser({id: id}))

}






  return (
<>

<div className='p-5'>
    <h1 className='text-center font-serif text-3xl'>HUMAN RESOURCE MANAGEMENT APPLICATION</h1>
    <Link to="/Create" className='float-right hover:bg-indigo-800 mr-5 mb-5 text-white bg-blue-500 font-bold rounded-md py-2 px-8 ml-50 mx-auto'>Add</Link>
<table className="w-full   p-20 mx-auto text-sm text-left rtl:text-right border-collapse text-gray-500 dark:text-gray-400">
        <thead className="text-xs  text-gray-700 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6  py-3">
                   ID 
                </th>
                <th scope="col" className="px-6 py-3">
                    NAME
                </th>
                <th scope="col" className="px-6 py-3">
                JOBS
                </th>
                <th scope="col" className="px-6 py-3">
                SALARY
                </th>
                <th scope="col" className="px-6 py-3">
                ACTION
                </th>
            </tr>
        </thead>
        <tbody>
        {users.map((user,index) => (
<tr key={index} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
<td className='px-6 py-6 text-center'>
 {user.id}
 </td>
 <td className='px-6 py-6 text-center'>
 {user.name}
 </td>
 <td className='px-6 py-6 text-center ' >
 {user.job}
 </td>
 <td className='px-6 py-6 text-center ' >
 {user.salary}
 </td>
 <td className='px-6 py-6 text-center '>
<Link to={`/Edit/${user.id}`} className='bg-green-500 text-white py-2 px-5 rounded-md m-1 font-bold'>Update</Link>
<button   onClick={() =>handleDelete(user.id)}      className='bg-red-500 text-white py-2 px-5 rounded-md m-1 font-bold'>Delete</button>
 </td>
</tr>

))}
</tbody>
</table>
</div>

</>
  
  )
}


export default Home