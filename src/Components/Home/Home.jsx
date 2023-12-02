import React from 'react'
import './Home.css'
import img1 from '../../assets/hero.jpg.jpg'
const Home = () => {
  return (
    <div>
      <div className="container">
       <div className="heroBanner">
       <div>
        <img src={img1} alt="" />
       </div>
       </div>
       <div  className='heading'><span>Wellcome</span></div>
      </div>
      
    </div>
  )
}

export default Home