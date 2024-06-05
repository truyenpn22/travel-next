// store/authSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUserFromLocalStorage } from '../action/helloWord';

interface AuthState {
    user: string | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;

}

const initialState: AuthState = {
    user: null,
    status: 'idle',
    error: null

};

const loadInitialState = () => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? { ...initialState, user: JSON.parse(savedUser) } : initialState;
};

const authSlice = createSlice({
    name: 'auth',
    initialState: loadInitialState(),
    reducers: {
        setUser: (state, action: PayloadAction<string | null>) => {
            state.user = action.payload;
        },
        logoutUser: (state) => {
            localStorage.removeItem('user');
            state.user = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserFromLocalStorage.pending, (state) => {
                state.status = "loading";
            })
            .addCase(
                fetchUserFromLocalStorage.fulfilled,
                (state, action: PayloadAction<string>) => {
                    state.status = "succeeded";
                    state.user = action.payload;
                }
            )
            .addCase(fetchUserFromLocalStorage.rejected, (state) => {
                state.status = "failed";
                state.error = state.status;
            });
    },
});

export const { setUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
