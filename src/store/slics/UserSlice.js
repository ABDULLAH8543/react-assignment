import { createSlice } from '@reduxjs/toolkit';

const persistance_key = 'user';

const persistState = ({key, data}) => {
    localStorage.setItem(key, JSON.stringify(data));
};

const userSlice = createSlice({
    name: "user",
    initialState: {
        email: '',
        password: '',
    },
    reducers: {
        login: (state, action) => {
            const { email, password } = action.payload;
            state.email = email;
            state.password = password;
            persistState({key:persistance_key, data:state});
        },
        logout: (state) => {
            state.email = '';
            state.password = '';
            persistState({key:persistance_key, data:state});
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
