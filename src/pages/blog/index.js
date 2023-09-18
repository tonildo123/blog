import React from 'react'
import { Box } from '@mui/material'
import NavBar from '../../components/NavBar'
import Bodier from '../../components/Bodier'
import Footer from '../../components/Footer'
import Posts from '../../components/Posts'
import News from '../../components/News'
import BlogFile from '../../components/BlogFile'


const Blog = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  };
  return (
    <Box sx={containerStyle}>
      <Bodier />
      <Posts />
      <News />
    </Box>
  )
}

export default Blog