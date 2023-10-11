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
            let newPost = {
                id: action.payload.id,
                // Descripcion: action.payload.Descripcion,
                Detail: action.payload.Detail,
                Photo: action.payload.Photo,
                Tag: action.payload.Tag,
                Titulo: action.payload.Titulo,
                orden: action.payload.orden,
                status: true
            };

            state.post = newPost

        },
        postFailure: (state, action) => {

            let newPost = {
                id: null,
                // Descripcion: null,
                Detail: null,
                Photo: null,
                Tag: null,
                Titulo: null,
                orden: null,
                status: false
            };

            state.post = newPost
        },
        petClean: (state, action) => {

            let newPost = {
                id: null,
                // Descripcion: null,
                Detail: null,
                Photo: null,
                Tag: null,
                Titulo: null,
                orden: null,
                status: null
            };

            state.post = newPost
        }
    },
})
// Action creators are generated for each case reducer function
export const { postSuccess, postFailure, postClean } = PostSlice.actions
export default PostSlice.reducer;
