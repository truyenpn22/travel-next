import create from 'zustand';

interface User {
    username: string;
    email: string;
    token: string;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean; // Thêm trạng thái loading
    error: string | null; // Thêm trạng thái error
    login: (credentials: { email: string; password: string }) => Promise<void>;
    register: (userData: { username: string; email: string; password: string }) => Promise<void>;
    logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    loading: false, // Khởi tạo trạng thái loading là false
    error: null, // Khởi tạo trạng thái error là null
    login: async (credentials) => {
        set({ loading: true, error: null }); // Bắt đầu quá trình đăng nhập, đặt loading là true và xóa bỏ lỗi (nếu có)

        try {
            const response = await fetch('http://localhost:5000/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data: User = await response.json();
            localStorage.setItem('user', JSON.stringify(data));
            set({ user: data, isAuthenticated: true });
        } catch (error: any) {
            set({ isAuthenticated: false, error: error.message }); // Đặt lỗi và đặt isAuthenticated và user là false và null
        } finally {
            set({ loading: false }); // Kết thúc quá trình đăng nhập, đặt loading là false
        }
    },
    register: async (userData) => {
        set({ loading: true, error: null }); // Bắt đầu quá trình đăng ký, đặt loading là true và xóa bỏ lỗi (nếu có)

        try {
            const response = await fetch('http://localhost:5000/api/v1/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Registration failed');
            }

            const data: User = await response.json();
            localStorage.setItem('user', JSON.stringify(data));
            set({ user: data, isAuthenticated: true });
        } catch (error: any) {
            set({ user: null, isAuthenticated: false, error: error.message }); // Đặt lỗi và đặt isAuthenticated và user là false và null
        } finally {
            set({ loading: false }); // Kết thúc quá trình đăng ký, đặt loading là false
        }
    },
    logout: () => {
        localStorage.removeItem('user');
        set({ user: null, isAuthenticated: false });
    },
}));

export default useAuthStore;
