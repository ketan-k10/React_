import React, { useEffect, useState } from 'react'

export default function Github() {
    const [data,setdata]= useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/Ketan-k10')
     .then(response => response.json())
     .then(data=>{
        console.log(data);
        setdata(data)
     })
    }, [])
    
  return (
    <div className='text-center m-4 bg-gray-700 text-white '>Github folllowers:- {data.follwers } Public Repos : -{data.public_repos}
    <img width={300}  src={data.avatar_url} alt="Git picture" />
    </div>
  )
}
