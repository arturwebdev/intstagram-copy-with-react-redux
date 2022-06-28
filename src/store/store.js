import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import postReducer from './featers/posts/postsSlice'
import usersReducer from './featers/users/usersSlice'
import chatReducer from './featers/chat/chatSlice'



const persistConfig = {
    key: 'root',
    storage,
}

const reducer = combineReducers({
    posts: postReducer,
    users: usersReducer,
    chat: chatReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)

export default store


// --------------------------------------



// import { configureStore, combineReducers } from '@reduxjs/toolkit'
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// import postReducer from './featers/posts/postsSlice'
// import usersReducer from './featers/users/usersSlice'
// import chatReducer from './featers/chat/chatSlice'

// const persistConfig = {
//     key: 'root',
//     storage,
// }

// const reducers = combineReducers({
//     posts: postReducer,
//     users: usersReducer,
//     chat: chatReducer
// })

// const persistedReducer = persistReducer(persistConfig, reducers)

// const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
// })

// export const persistor = persistStore(store)
// export default store