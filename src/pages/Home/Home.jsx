import React from 'react'
import Navbar from '../../component/Navabar/Navbar'
import Body from '../../component/Body/Body'
import Content from '../../component/Content/Content'
import Footer from '../../component/Footer/Footer'

const Home = () => {


  return (
    <div>
      <Navbar/>
      <Body/>
      <Content/>
    <div className="more_content">
    <Content title={'New Movies'}  category={"popular"}/>
    <Content title={'Old Movies'} category={"top_rated"}/>
    <Content title={'UpComing Movies'} category={"upcoming"}/>
    <Content title={'Happy Movies'} category={"now_playing"}/>
    <Footer/>
    </div>
    </div>
  )
}

export default Home
