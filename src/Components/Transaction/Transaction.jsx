import React from 'react'
import { useState } from 'react'
import './Transaction.css'
function Transaction() {

    const [details, setDetails] = useState({
        fName: '',
        lName: '',
        email: '',
       
    })

    const PostData =async(e)=>{
        e.preventDefault()

        const{fName,lName,email}=details;

       const res=await fetch("(https://firebase.google.com/docs/firestore.com.json",
       {
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body:JSON.stringify({
            fName,
            lName,
            email,
           
           })

        })
      if(res){
        alert("message sent")
      }  
      
    }

  return (
    <div className="page">
      <div className='pages'>Transaction Page</div>
      <div className='form' >
       <div className="container">
       <form>
       <input type='text' placeholder='Enter wallet address' onChange={(e)=>
            setDetails({...details,fName:e.target.value})} required />
        <input type='text' placeholder='Enter Amount' onChange={(e)=>
            setDetails({...details,lName:e.target.value})} required />

        <button onClick={PostData}>Submit</button>
       </form>
       </div>
    </div>
    </div>
  )
}

export default Transaction