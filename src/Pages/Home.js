import React from 'react'
import '../styles/Home.css'
import homePage from '../images/homePage.jpg'

const Home = () => {
  return (
    <div className='container content'>
      <h1 className='text-center'>Build A Home</h1>
      <h3>Build The House of your Dreams</h3>
      <img class="home-img" src={ homePage } alt='Home'/>
      <h4>Home Page description</h4>
      <h2>What We Do</h2>
      <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
  )
}

export default Home
