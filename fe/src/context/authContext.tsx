"use client";
import React, { createContext, useEffect, useReducer, useContext, ReactNode, useState } from "react";

type User = {
    _id: string;
    username: string;
    email: string;
} | null;

type State = {
    user: User;
    loading: boolean;
    error: string | null;
};

type Action =
    | { type: "LOGIN_START" }
    | { type: "LOGIN_SUCCESS"; payload: User }
    | { type: "LOGIN_FAILURE"; payload: string }
    | { type: "REGISTER_SUCCESS" }
    | { type: "LOGOUT" };

function loadUser(): User {
    const data = localStorage.getItem("user");
    if (data) {
        return JSON.parse(data);
    }
    return null;
}

const initialState: State = {
    user: typeof window !== "undefined" ? loadUser() : null,
    loading: false,
    error: null,
};

export const AuthContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
}>({
    state: initialState,
    dispatch: () => null,
});

const authReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                ...state,
                user: null,
                loading: true,
                error: null,
            };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null,
            };
        case "LOGIN_FAILURE":
            return {
                ...state,
                user: null,
                loading: false,
                error: action.payload,
            };
        case "REGISTER_SUCCESS":
            return {
                ...state,
                user: null,
                loading: false,
                error: null,
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
};

type AuthContextProviderProps = {
    children: ReactNode;
};

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const [showChild, setShowChild] = useState(false)

    useEffect(() => {
        if (state.user) {
            localStorage.setItem("user", JSON.stringify(state.user));
        }
        setShowChild(true)
    }, [state.user]);


    if (!showChild) {
        return null
    }

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
