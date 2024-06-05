import { createAsyncThunk } from "@reduxjs/toolkit";

// import getApiUrl from "@/utils/Api";
// import axios from "axios";

// export const fetchHelloWorld = createAsyncThunk(
//     "helloWorld/fetchHelloWorld",
//     async () => {
//         const { data } = await axios.get(`${getApiUrl()}/api/hello-world`);
//         return data;
//     }
// );
export const fetchUserFromLocalStorage = createAsyncThunk(
    'auth/fetchUser',
    async () => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    }
);