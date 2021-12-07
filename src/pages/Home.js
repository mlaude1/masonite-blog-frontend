import React from 'react'
import head from '../images/head.png'
import time from '../images/time.png'

const Home = () => {
  return (
    <div>
      {/* HEADER */}
      <nav>
        <div className="logo">
          <img src={head} className="head-logo" alt="Mott head" />
          <h1>MOTT WRLD</h1>
        </div>
      </nav>
      
      {/* BODY */}
      <div className="title">
        <h1>Time Machine</h1>
        {/* <img src={time} className="time-logo" alt="Time machine" /> */}
        <h2>Capture a moment in time</h2>
      </div>

      {/* FORM */}
      <div className="form">
        <h1>How was your day?</h1>
        
        <form>
          <input type="text" placeholder="Date" />
          <input type="text" placeholder="What happened" />
          {/* <textarea /> */}
          <input type="text" placeholder="Photo URL" />
          <input type="submit" value="POST" />

        </form>
      </div>

    </div>
  )
}

export default Home
