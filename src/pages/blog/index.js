import React from 'react'
import NavBar from '../../components/NavBar'
import Bodier from '../../components/Bodier'
import Footer from '../../components/Footer'
import Posts from '../../components/Posts'
import News from '../../components/News'
import { Divider } from '@mui/material'

const Blog = () => {
  return (
    <div>
        <NavBar/>
        <Bodier/>
        <Divider />
        <Posts/> {/**esta tapando un poco a News */}
        <br/>
        <Divider />
        <News/>
        <br/>
        <Divider />
        <Footer/>
    </div>
  )
}

export default Blog