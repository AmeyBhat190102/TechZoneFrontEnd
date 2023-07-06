import {createReducer} from "@reduxjs/toolkit"

const initialState = {loggedIn : false , username :"" , cartelements : []}

export const customReducer = createReducer(initialState , {

    setloggedin : (state) => {
        state.loggedIn = !state.loggedIn
    } ,
    setusername : (state,action)=>{
        state.username = action.payload
    } ,
    addtocart : (state,action) => {
        state.cartelements.push(action.payload)
    }
})