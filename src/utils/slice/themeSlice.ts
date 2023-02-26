import { createSlice } from '@reduxjs/toolkit';

export type themeType = {
    theme: 'dark' | 'light',
    navActive:string
}

const initialState: themeType = {
    theme: 'dark',
    navActive:''
}

const themeSlice = createSlice({
    name: "theme",
    initialState: initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload
        },
        setNavActive: (state, action) => {
            state.navActive = action.payload
        }
    }
});

export const { setTheme,setNavActive } = themeSlice.actions

export default themeSlice.reducer