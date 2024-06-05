'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useRouter, useParams, useSearchParams } from 'next/navigation'
import Image from "next/image";

interface Blog {
    _id: string,
    title: string,
    desc: string,
    photo: string,
    city: string,
    address: string,
    distance: number,
    price: number,
}

const blogDetail = ({ params }: any) => {
    const [data, setData] = useState<Blog | null>(null);
    // // pages/users/[userId].js
    // const par = useParams()
    // console.log(par.blogDetail);


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
    console.log(data);

    useEffect(() => {
        fetchData1();
    }, [])

    return (
        <MaxWidthWrapper className="py-12 max-w-[1800px]">
            <div className="bg-white font-[sans-serif] p-4">
                <div>
                    <h2 className="text-3xl font-extrabold text-[#333] inline-block">Lastes Blogs</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    <div className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-105 transition-all duration-300">
                        <img src={data?.photo} alt="Blog Post 1" className="lg:w-2/4 min-h-[250px] h-full object-cover" />
                        {/* <Image src={data?.photo} alt="photo-blog" /> */}
                        <div className="p-6 lg:w-3/5">
                            <h3 className="text-xl font-bold text-[#333]">{data?.title}</h3>
                            <span className="text-sm block text-gray-400 mt-2">{data?.city} | {data?.address}</span>
                            <p className="text-sm mt-4">{data?.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper >
    );
}

export default blogDetail;
