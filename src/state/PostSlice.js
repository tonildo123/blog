import { createSlice } from '@reduxjs/toolkit'

export const PostSlice = createSlice({
    name: 'postuser',
    initialState: {
        post:
        {
            id: null,
            // Descripcion: null,
            Detail: null,
            Photo: null,
            Tag: null,
            Titulo: null,
            orden: null,
            status: null
        },

    },
    reducers: {
        postSuccess: (state, action) => {
            let newPet = {
                id: action.payload.id,
                // Descripcion: action.payload.Descripcion,
                Detail: action.payload.Detail,
                Photo: action.payload.Photo,
                Tag: action.payload.Tag,
                Titulo: action.payload.Titulo,
                orden: action.payload.orden,
                status: true
            };

            state.pet = newPet

        },
        postFailure: (state, action) => {

            let newPet = {
                id: null,
                // Descripcion: null,
                Detail: null,
                Photo: null,
                Tag: null,
                Titulo: null,
                orden: null,
                status: false
            };

            state.pet = newPet
        },
        petClean: (state, action) => {

            let newPet = {
                id: null,
                // Descripcion: null,
                Detail: null,
                Photo: null,
                Tag: null,
                Titulo: null,
                orden: null,
                status: null
            };

            state.pet = newPet
        }
    },
})
// Action creators are generated for each case reducer function
export const { postSuccess, postFailure, postClean } = PostSlice.actions
export default PostSlice.reducer;
