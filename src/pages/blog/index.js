
import { Box } from '@mui/material'
import Bodier from '../../components/Bodier'
import Posts from '../../components/Posts'
import News from '../../components/News'


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