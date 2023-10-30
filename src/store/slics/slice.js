import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name: "blogs",
    initialState: [],
    reducers: {
        addblog: (state, action) => {
            state.push(action.payload);
        },
        Deleteblog: (state, action) => {
            const { id } = action.payload;
            return state.filter((blog) => blog.id !== id);
        },
        Updateblog: (state, action) => {
            const { id, title, blog } = action.payload;
            const inner = state.find((blogs) => blogs.id === id);
            if (inner) {
                inner.title = title;
                inner.blog = blog;
            }
        },
    },
});


export const { addblog, Deleteblog, Updateblog} = blogSlice.actions;
export default blogSlice.reducer;