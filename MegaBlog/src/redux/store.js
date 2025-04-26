import {configureStore} from '@reduxjs/toolkit'
import authslice from './Authslice.js'

export const store=configureStore({
    reducer:{
        auth:authslice
    } 
})