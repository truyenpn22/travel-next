import { useAuth } from '@/context/authContext'
import Link from 'next/link'
import React, { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'

const Booking = ({ tour, avgRating }: any) => {
    const { state, dispatch } = useAuth()
    const { user } = state


    const [booking, setBooking] = useState({
        userId: '',
        userEmail: '',
        tourName: '',
        fullName: '',
        phone: '',
        guestSize: '',
        bookAt: ''
    })



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }
    const serviceFee = 10
    const totalAmount = Number(tour?.price) * Number(booking.guestSize) + Number(serviceFee)


    const handleClick = async (e: FormEvent) => {
        e.preventDefault();

        try {
            if (!user || user === undefined || user === null) {
                toast.error("Please sign in");
            }

            const res = await fetch("http://localhost:5000/api/v1/booking", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include",
                body: JSON.stringify(booking),
            });

            const result = await res.json();

            if (!res.ok) {
                return toast.error(result.message);
            }
            toast.success('Order Success')
        } catch (err: any) {
            toast.error(err.message);
        }
    };


    return (
        <>

            <div className="lg:col-span-2 p-6 bg-gray-100">
                <div className=" rounded-sm p-4 h-max">
                    <h3 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-2">Order Summary</h3>

                    <form className="mt-4">
                        <div>
                            <h3 className="text-base text-gray-800 mb-2">Enter Details</h3>
                            <div className="space-y-2">
                                <div className="relative flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        id="fullName"
                                        required
                                        onChange={handleChange}
                                        defaultValue={user?.username}
                                        className="px-4 py-2.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none" />
                                    <i className="ri-user-fill absolute right-4"></i>

                                </div>

                                <div className="relative flex items-center">
                                    <input
                                        type="number"
                                        id="phone"
                                        required
                                        onChange={handleChange} placeholder="Phone No."
                                        className="px-4 py-2.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none" />
                                    <i className="ri-phone-fill absolute right-4"></i>
                                </div>
                                <div className="relative flex items-center">
                                    <input
                                        type="date"
                                        id="bookAt"
                                        required
                                        onChange={handleChange}
                                        className="px-4 py-2.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none" />

                                </div>
                            </div>
                        </div>
                    </form>

                    <ul className="text-gray-800 mt-4 space-y-2">
                        <li className="flex flex-wrap gap-4 text-sm">Subtotal <span className="ml-auto font-bold">              ${tour?.price}</span></li>
                        <li className="flex flex-wrap gap-4 text-sm">Shipping <span className="ml-auto font-bold">${serviceFee}</span></li>
                        <hr className="border-gray-300" />
                        <li className="flex flex-wrap gap-4 text-sm font-bold">Total <span className="ml-auto">${totalAmount}</span></li>
                    </ul>

                    <div className="mt-4 space-y-2">
                        <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-sm" onClick={handleClick}>Buy now</button>
                        <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-sm"><Link href='/blog'>Continue Booking </Link> </button>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Booking