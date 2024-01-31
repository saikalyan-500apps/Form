// store/login.js
import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', () => {
    const state = {
        email: '',
        password: '',
        registeredUser_data: [],
        loggedInUser: null
    }

    const setEmail = (value) => {
        state.email = value
    }

    const setPassword = (value) => {
        state.password = value
    }

    const clearCredentials = () => {
        state.email = ''
        state.password = ''
    }

    const initialize = () => {
        if (typeof localStorage !== 'undefined') {
            state.registeredUser_data = JSON.parse(localStorage.getItem('registeredUser_data')) || [];
        }
    }

    const storeUser = (user) => {
        state.registeredUser_data.push(user);
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('registeredUser_data', JSON.stringify(state.registeredUser_data));
        }
    }

    const checkLogin = () => {
        state.loggedInUser = state.registeredUser_data.find(user => user.Email === state.email && user.Password === state.password);
        return state.loggedInUser;
    }

    return { 
        email: state.email,
        password: state.password,
        setEmail,
        setPassword,
        clearCredentials,
        initialize,
        storeUser,
        checkLogin,
        registeredUser_data: state.registeredUser_data  
    }
})

