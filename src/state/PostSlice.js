import { createSlice } from '@reduxjs/toolkit'

export const PostSlice = createSlice({
    name: 'postuser',
    initialState: {
        post:
        {
            id: null,
            Articulo: null,
            Detalle:null,
            Photo: null,
            Tag: null,
            precio: null,
            orden: null,
            status: null
        },

    },
    reducers: {
        postSuccess: (state, action) => {
            let newPost = {
                id: action.payload.id,
                Articulo: action.payload.Articulo,
                Detalle:action.payload.Detalle,
                Photo: action.payload.Photo,
                Tag: action.payload.Tag,
                precio: action.payload.precio,
                orden: action.payload.orden,
                status: true
            };

            state.post = newPost

        },
        postFailure: (state, action) => {

            let newPost = {
                id: null,
                Articulo: null,
                Detalle:null,
                Photo: null,
                Tag: null,
                precio: null,
                orden: null,
                status: false
            };

            state.post = newPost
        }
    },
})
export const { postSuccess, postFailure } = PostSlice.actions
export default PostSlice.reducer;
