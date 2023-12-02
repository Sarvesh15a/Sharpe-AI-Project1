import React, { useEffect, useState } from 'react'
import './Data.css'
import UserData from './../UserData';
const API="https://jsonplaceholder.typicode.com/posts"


const Dataa = () => {
  const[users,setUsers]=useState([]);

const fetchUsers=async (url)=>{
      try{
          const res=await fetch(url);
          const data=await res.json();
          console.log(data)
          if(data.length>0){
            setUsers(data)
          }
      }catch(e){
        console.error(e)
      }
}

useEffect(() => {
   fetchUsers(API);
}, [])

  return (
    <>
    <table>
      <thead>
        <tr>
        <th>userId</th>
        <th>Id</th>
        <th>Title</th>
        <th>Body</th>
        </tr>
      </thead>
      <tbody>
        <UserData users={users}/>
      </tbody>
    </table>

    </>
  )
}

export default Dataa