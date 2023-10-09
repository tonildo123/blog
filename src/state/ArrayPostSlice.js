import { createSlice } from '@reduxjs/toolkit'

export const ArrayPostSlice = createSlice({
  name: 'userPostsArray',
  initialState: {
    posts: []
  },
  reducers: {
    postArraySuccess: (state, action) => {
      // Agrega la nueva mascota al array de mascotas del usuario
      state.posts.push({
        id: action.payload.id,
        // Descripcion: action.payload.Descripcion,
        Detail: action.payload.Detail,
        Photo: action.payload.Photo,
        Tag: action.payload.Tag,
        Titulo: action.payload.Titulo,
        orden: action.payload.orden,
        status: true,
      });
    },
    postArrayFailure: (state, action) => {

      return state
    },
    postArrayClean: (state, action) => {

      state.posts = [];
    },
    postArrayRemove: (state, action) => {
      const idToRemove = action.payload;
      state.posts = state.posts.filter((post) => post.id !== idToRemove);
    }
  },
})
// Action creators are generated for each case reducer function
export const { postArraySuccess, postArrayFailure, postArrayClean, postArrayRemove } = ArrayPostSlice.actions
export default ArrayPostSlice.reducer;
