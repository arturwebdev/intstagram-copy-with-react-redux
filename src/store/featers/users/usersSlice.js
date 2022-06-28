import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";


export const fatchingUsers = createAsyncThunk(
    'users/fatchingUsers',
    async function() {
        const usersRespons = await axios.get('https://jsonplaceholder.typicode.com/users')
        const singelPostsRespons = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=500') 
        
        const usersData = await usersRespons.data
        const singlePostsData = await singelPostsRespons.data

        const data = usersData.map(user => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            password: user.website.slice(0, user.website.indexOf('.')),
            posts: singlePostsData.filter(post => post.albumId === user.id)
        }))
        return data
    }
)


const usersSlice = createSlice({
    name: 'users',
    initialState: {
        loading: false,
        errors: false,
        data: [],
        correntUser: null
    },
    reducers: {
        logIn: (state, {payload}) => {
            return {
                ...state, 
                correntUser: {
                    ...state.data.filter(user => {
                        if ((
                            payload.username === user.username || 
                            payload.username === user.email) && 
                            payload.password === user.password ) {
                            return true
                        }
                        return false
                    })[0]
                }
            }
        },
        addPost: (state, {payload}) => {
            return {
                ...state,
                correntUser: {
                    ...state.correntUser,
                    posts: [
                            {
                                id: payload.id,
                                url: payload.img
                            },
                            ...state.correntUser.posts
                        ]
                }
            }
        },
        delPost: (state, {payload}) => {
            let idx = state.correntUser.posts.findIndex((element) => element.id === payload.id)
            // let idx
            // state.correntUser.posts.forEach((element, i) => {
            //     if (element.id === payload.id) {
            //         idx = i
            //     }
            // });
            // console.log(idx);
            state.correntUser.posts.splice(idx, 1)
        }
    },
    extraReducers: {
        [fatchingUsers.pending]: (state, action) => {
            console.log('chanaparin em');
        },
        [fatchingUsers.fulfilled]: (state, action) => {
            console.log(action.payload);
            return {
                ...state,
                data: [...action.payload]
            }
        },
        [fatchingUsers.rejected]: (state, action) => {
            console.log('err');
        }
    }
})

export const { logIn, addPost, delPost } = usersSlice.actions

export const usersSelect = state => state.users

export default usersSlice.reducer