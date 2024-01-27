import { configureStore } from '@reduxjs/toolkit'
import LoginSlice from './LoginSlice'
import ProfileSlice from './Profileslice'
import PostSlice from './PostSlice'
import ArrayPostSlice from './ArrayPostSlice'


export const store = configureStore({
  reducer: {
    logger: LoginSlice, // login
    profileuser: ProfileSlice, // perfil
    postuser: PostSlice, // post 
    userPostsArray: ArrayPostSlice, // posts 
  },
})