import React from 'react'

const UserData = ({users}) => {
  return (
    <>
    {

        users.map((curUser)=>{
            const{userId, id, title, body}=curUser

            return(
                <tr key={id}>
                    <td>{userId}</td>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{body}</td>
                </tr>
            )
        })
    }
    </>
  )
}

export default UserData