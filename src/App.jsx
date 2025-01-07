import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div
        className="nav"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px',
          position: 'absolute',
          top: 0,
          width: '100%',
          backgroundColor: 'rgba(226, 237, 229, 0.8)', 
          zIndex: 10,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/cake-landing-pg.jpg" 
            alt="Cake Icon"
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              marginRight: '10px',
              cursor:'pointer'
            }}
          />
          <h3 style={{ color: 'black', margin: 0,cursor:'pointer' }}>Cake</h3>
        </div>
        <ul
          style={{
            display: 'flex',
            gap: '20px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            
          }}
        >
          <li><a href="#home" style={{ textDecoration: 'none', color: 'black' }}>Home</a></li>
          <li><a href="#explore" style={{ textDecoration: 'none', color: 'black' }}>Explore</a></li>
          <li><a href="#orders" style={{ textDecoration: 'none', color: 'black' }}>Orders</a></li>
          <li><a href="#contact" style={{ textDecoration: 'none', color: 'black' }}>Contact Us</a></li>
        </ul>
      </div>
      <header style={{backgroundImage: `url('/cake-landing-pg.jpg')`,backgroundSize:'cover',backgroundPosition:'center',height:'100vh',width:'230vh',}}>
      <h1
          style={{
            color: 'white',
            position: 'absolute',
            top: '40%',
            left: '10%',
            fontSize: '3rem',
            margin: 0,
          }}
        >
          Welcome To Cake Shop
        </h1>
        <button
          style={{
            height: '50px',
            width: '150px',
            position: 'absolute',
            top: '55%',
            left: '15%',
            backgroundColor: 'rgb(255, 113, 234)',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: 'large',
            cursor: 'pointer',
          }}
        >
          Order Now
        </button>
      </header>
      <div>.




      </div>
      <div>.




      </div>
      <div>.




      </div>
    </>
  )
}

export default App
