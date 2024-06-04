"use client";
import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface AuthContextType {
    user: any;
    setUser: (user: any) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const getUserFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
        const user = localStorage.getItem('user');
        if (user) {
            const parsedUser = JSON.parse(user);
            return parsedUser.username;
        }
    }
    return null;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<any>(getUserFromLocalStorage());
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setUser(getUserFromLocalStorage());
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
    return (
        <AuthContext.Provider value={{ user, setUser }}>
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
