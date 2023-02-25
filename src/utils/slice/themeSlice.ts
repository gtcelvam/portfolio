import { createSlice } from '@reduxjs/toolkit';

export type themeType = {
    theme: 'dark' | 'light'
}

const initialState: themeType = {
    theme: 'dark'
}

const themeSlice = createSlice({
    name: "theme",
    initialState: initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload
        }
    }
});

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer