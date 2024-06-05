'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';

const SignUp: React.FC = () => {

    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:5000/api/v1/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Registration failed');
            }
            toast.success("Register successfully", {
                autoClose: 1500,
            });

        } catch (err: any) {
            setError(err.message);
            toast.error(err.message, {
                autoClose: 1500
            })
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="font-[sans-serif] bg-gradient-to-r from-purple-900 via-purple-800 to-purple-600 text-[#333]">
            <div className="min-h-screen-minus-72 flex flex-col items-center justify-center lg:p-6 p-4">
                <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
                    <div className="max-md:text-center">
                        <a>
                            <img src="https://readymadeui.com/readymadeui-white.svg" alt="logo" className='w-52 mb-10 inline-block' />
                        </a>
                        <h2 className="text-4xl font-extrabold lg:leading-[50px] text-white">
                            Seamless Registration for Exclusive Benefits
                        </h2>
                        <p className="text-sm mt-6 text-white">Experience a smooth and effortless registration process with our intuitively designed registration form. Sign up to unlock exclusive benefits.</p>
                        <p className="text-sm mt-10 text-white">Already have an account <Link href="/sign-in" className="text-white font-semibold underline ml-1">Login here</Link></p>
                    </div>
                    <form onSubmit={handleSubmit} className="bg-white rounded-xl px-6 py-8 space-y-6 max-w-md md:ml-auto max-md:mx-auto w-full">
                        <h3 className="text-3xl font-extrabold mb-12 max-md:text-center">
                            Register
                        </h3>
                        {error && <div className="text-red-500">{error}</div>}
                        <div>
                            <input
                                name="username"
                                type="text"
                                required
                                className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#333]"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                name="email"
                                type="email"
                                required
                                className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#333]"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                name="password"
                                type="password"
                                required
                                className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#333]"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="!mt-10">
                            <button
                                type="submit"
                                className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#333] hover:bg-[#222] focus:outline-none"
                                disabled={loading}
                            >
                                {loading ? 'Registering...' : 'Register'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
