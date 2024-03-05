import React, { useCallback, useState } from 'react'
import "../src/Home.css"
import { useNavigate } from 'react-router';
function Home() {
    let [val, setval] = useState();
    const navigate = useNavigate()
    const JionRoom = useCallback(() => {
        navigate(`/room/${val}`)
    },[val,navigate])
  return (
    <div className='head'>
          <input type="text" placeholder='enter the roomid' onChange={e=>setval(e.target.value)} />
          <button onClick={JionRoom}>jion room</button>
    </div>
  )
}

export default Home
