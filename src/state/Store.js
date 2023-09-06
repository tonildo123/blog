import { configureStore } from '@reduxjs/toolkit'
import LoginSlice from './LoginSlice'
import ProfileSlice from './Profileslice'
import AddressSlice from './AddressSlice'
import PetSlice from './PetSlice'


export const store = configureStore({
  reducer: {
    logger: LoginSlice, // login
    profileuser: ProfileSlice, // perfil
    addressuser: AddressSlice, // herramientas
    petuser: PetSlice, // post 
  },
})