'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useRouter, useParams, useSearchParams } from 'next/navigation'
import Image from "next/image";
import { useAuth } from "@/context/authContext";
import Booking from "@/components/Booking";




const blogDetail = ({ params }: any) => {

    const [data, setData] = useState<Blog | null>(null);
    const { state, dispatch } = useAuth();
    const { user } = state;

    const fetchData1 = async () => {

        try {
            const res = await fetch(`http://localhost:5000/api/v1/tours/${params.blogDetail}`);
            const results = await res.json();
            setData(results.data)
            console.log(results.data);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    useEffect(() => {
        fetchData1();
    }, [])

    return (
        <MaxWidthWrapper className="py-12 max-w-[1800px]">
            <div className="font-sans bg-white">
                <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
                    <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                        <div className="lg:col-span-3 w-full lg:sticky top-0">

                            <div className="relative">
                                <img src={data?.photo} alt="Product" className="w-4/5 rounded object-cover" />
                            </div>
                            <div>
                                <h1 className="font-bold text-[25px] my-2">{data?.title} | ${data?.price}</h1>
                                <p>{data?.desc}</p>
                            </div>
                        </div>
                        <Booking tour={data} />
                    </div>

                    <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                        <h3 className="text-lg font-bold text-[#333]">Product information</h3>
                        <ul className="mt-6 space-y-6 text-[#333]">
                            <li className="text-sm">TYPE <span className="ml-4 float-right">LAPTOP</span></li>
                            <li className="text-sm">RAM <span className="ml-4 float-right">16 BG</span></li>
                        </ul>
                    </div>

                    <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                        <h3 className="text-lg font-bold text-[#333]">Reviews(10)</h3>
                        <div className="grid md:grid-cols-2 gap-12 mt-6">
                            <div>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <p className="text-sm text-[#333] font-bold">5.0</p>
                                        <svg className="w-5 fill-[#e69122] ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                            <div className="w-2/3 h-full rounded bg-[#333]"></div>
                                        </div>
                                        <p className="text-sm text-[#333] font-bold ml-3">66%</p>
                                    </div>

                                    <div className="flex items-center">
                                        <p className="text-sm text-[#333] font-bold">4.0</p>
                                        <svg className="w-5 fill-[#e69122] ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                            <div className="w-1/3 h-full rounded bg-[#333]"></div>
                                        </div>
                                        <p className="text-sm text-[#333] font-bold ml-3">33%</p>
                                    </div>

                                    <div className="flex items-center">
                                        <p className="text-sm text-[#333] font-bold">3.0</p>
                                        <svg className="w-5 fill-[#e69122] ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                            <div className="w-1/6 h-full rounded bg-[#333]"></div>
                                        </div>
                                        <p className="text-sm text-[#333] font-bold ml-3">16%</p>
                                    </div>

                                    <div className="flex items-center">
                                        <p className="text-sm text-[#333] font-bold">2.0</p>
                                        <svg className="w-5 fill-[#e69122] ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                            <div className="w-1/12 h-full rounded bg-[#333]"></div>
                                        </div>
                                        <p className="text-sm text-[#333] font-bold ml-3">8%</p>
                                    </div>

                                    <div className="flex items-center">
                                        <p className="text-sm text-[#333] font-bold">1.0</p>
                                        <svg className="w-5 fill-[#e69122] ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                            <div className="w-[6%] h-full rounded bg-[#333]"></div>
                                        </div>
                                        <p className="text-sm text-[#333] font-bold ml-3">6%</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-start">
                                    <img src="https://readymadeui.com/team-2.webp" className="w-12 h-12 rounded-full border-2 border-white" />
                                    <div className="ml-3">
                                        <h4 className="text-sm font-bold text-[#333]">John Doe</h4>
                                        <div className="flex space-x-1 mt-1">
                                            <svg className="w-4 fill-[#e69122]" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <svg className="w-4 fill-[#e69122]" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <svg className="w-4 fill-[#e69122]" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <p className="text-xs !ml-2 font-semibold text-[#333]">2 mins ago</p>
                                        </div>
                                        <p className="text-sm mt-4 text-[#333]">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>

                                <button type="button" className="w-full mt-10 px-4 py-2.5 bg-transparent hover:bg-gray-50 border border-[#333] text-[#333] font-bold rounded">Read all reviews</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper >
    );
}

export default blogDetail;







