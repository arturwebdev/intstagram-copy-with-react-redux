import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postsFatching = createAsyncThunk(
    'posts/postsFatching',
    async function () {
        const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const imgesResponse = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=100')
        const commentsResponse = await axios.get('https://jsonplaceholder.typicode.com/comments')
        
        const postsData = await postsResponse.data
        const imgesData = await imgesResponse.data
        const commentsData = await commentsResponse.data

        const data = postsData.map(el =>{
            let comments = commentsData.filter(comment => comment.postId === el.id) 
            comments = comments.map(comment => (
                {
                    id: comment.id,
                    name: comment.name.split(' ').join('').slice(0, 7),
                    body: comment.body
                }
            ))

            return ({
                id: el.id,
                userName: el.title.split(' ').join('').slice(0, 7),
                // userName: el.title,
                about: el.body,
                img: imgesData.filter(img => img.id === el.id)[0].url,
                comments: comments 
            })
        })

        return data
    }
)



const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        loading: false,
        errors: false,
        data: [],
        initialData: [],
        isFatched: false
    },
    reducers: {
        searchUserPosts: (state, {payload}) => {
            // payload.text
            return {
                ...state,
                initialData: [...state.data.filter(post => post.userName.startsWith(payload.text.toLowerCase())) ]
            }
        },
        addPostInAll: (state, {payload}) => {
            return {
                ...state, 
                data: [
                    {
                        id: payload.id,
                        userName: payload.userName,
                        about: payload.about,
                        img: payload.img,
                        comments: []
                    },
                    ...state.data
                ]
            }
        },
        delPostFromAll: (state, {payload}) => {
            let idx = state.data.findIndex((el) => el.id === payload.id)
            state.data.splice(idx, 1)
            
        },
        addComment: (state, {payload}) => {
            return {
                ...state,
                data: state.data.map(post => {
                    if (post.id === payload.id) {
                        return {
                            ...post,
                            initialData: [
                                ...post.comments,
                                {
                                    id: new Date().getTime().toString(),
                                    name: 'user',
                                    body: payload.comment
                                }
                            ],
                            comments: [
                                ...post.comments,
                                {
                                    id: new Date().getTime().toString(),
                                    name: 'user',
                                    body: payload.comment
                                }
                            ]
                        }
                    }
                    return post
                })
            }
        }
        
    },
    extraReducers: {
        [postsFatching.pending] : (state, action) => {
            console.log('chanaparin em');
        },
        [postsFatching.fulfilled]: (state, action) => {
            console.log('ok');
            return{
                ...state,
                data: [...state.data, ...action.payload],
                initialData: [...state.initialData,...action.payload],
                isFatched: true
            }
        }
    }
})

export const { addComment, addPostInAll, delPostFromAll, searchUserPosts } = postsSlice.actions
export const selectPosts = (state) => state.posts


export default postsSlice.reducer
