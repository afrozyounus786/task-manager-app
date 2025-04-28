import React, { useState } from 'react'

const Header = (props) => {
  
  // const [username, setUsername] = useState("");

  // if(!data){
  //   setUsername('Admin');
  // }else{
  //   setUsername(data.firstName);
  // }

  const logOutUser = () => {
    localStorage.setItem("loggedInUser" , "");
    // window.location.reload();
    props.changeUser('');
  }
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /><span className='text-4xl font-semibold'>username!</span></h1>
        <button onClick={logOutUser}className='bg-red-600 text-white px-5 py-2 rounded'>Log out</button>
    </div>
  )
}

export default Header