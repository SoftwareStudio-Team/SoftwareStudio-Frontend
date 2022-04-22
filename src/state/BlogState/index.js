import { createSlice } from "@reduxjs/toolkit";

export const blogDataSlice = createSlice({
  name: "blogData",
  initialState: {
    title: "",
    content: "",
  },
  reducers: {
    setCreateNewBlog: (state) => {
      state.title = "";
      state.content = "";
      if (state.id) {
        delete state.id;
      }
    },
    setBlogId: (state, { payload: { id } }) => {
      state.id = id;
    },
    updateTitle: (state, { payload: { title } }) => {
      state.title = title;
    },
    updateContent: (state, { payload: { content } }) => {
      state.content = content;
    },
  },
});

export const { setCreateNewBlog, updateTitle, updateContent } =
  blogDataSlice.actions;

export default blogDataSlice.reducer;
