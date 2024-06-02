import React from 'react'
import { useSelector } from 'react-redux'


function Home() {
    const users = useSelector((state) => state.users);
    console.log(users);
  return (
<>

<div className='p-5'>
    <h1 className='text-center font-bold text-3xl'>HUMAN RESOURCE APPLICATION</h1>
    <button className='float-right hover:bg-indigo-800 mr-5 mb-5 text-white bg-blue-500 font-bold rounded-md py-2 px-8 ml-50 mx-auto'>Add</button>
    <table className="w-full   p-20 mx-auto text-sm text-left rtl:text-right border-collapse text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                ACTION
                </th>
            </tr>
        </thead>
        <tbody>
        {users.map((user,index) => {
<tr key={index}>
<td>
 {user.id}
 </td>
 <td>
 {user.name}
 </td>
 <td >
 {user.job}
 </td>
 <td>
<button className='bg-green-500 text-white py-2 px-5 rounded-ml'>Edit</button>
<button className='bg-red-500 text-white py-2 px-5 rounded-ml'>Delete</button>
 </td>
</tr>

})}
</tbody>
</table>
</div>

</>
  
  )
}


export default Home