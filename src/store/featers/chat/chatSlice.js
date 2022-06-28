import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        with: 'Bot',
        chat: []
    },
    reducers: {
        addMessage: (state, {payload}) => {
            let selfMessage = {
                id: new Date().getTime().toString() + Math.random(),
                from: 'self',
                body: payload.body
            }

            let remoteMessage = {
                id: new Date().getTime().toString() + Math.random(),
                from: 'remote'
            }

            

            if (payload.body.split(' ').some((el) => el.toLowerCase() === 'barev')) {
                remoteMessage.body = 'Barev'                
            }else{
                remoteMessage.body = 'Hn?'
            }

            state.chat.push(selfMessage, remoteMessage)

        }
    }
})

export const selectChat = state => state.chat

export const { addMessage } = chatSlice.actions

export default chatSlice.reducer