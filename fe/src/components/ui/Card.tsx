'use client'
import { useEffect, useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";

const Card = (props: any) => {
    const [data, setData] = useState([]);

    const fetchData1 = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/v1/tours');
            const results = await res.json();
            setData(results.data)
            console.log(results);

        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    useEffect(() => {
        fetchData1();
    }, [])

    return (
        <MaxWidthWrapper className="py-12 max-w-[1800px]">
            <div className="bg-white font-[sans-serif] p-4">
                <div>
                    <h2 className="text-3xl font-extrabold text-[#333] inline-block">LATEST BLOGS</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    {data.map((posts: any) => (
                        <div key={posts._id} className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-105 transition-all duration-300">
                            <img src={posts.photo} alt="Blog Post 1" className="lg:w-2/5 min-h-[250px] h-full object-cover" />
                            <div className="p-6 lg:w-3/5">
                                <h3 className="text-xl font-bold text-[#333]">{posts.title}</h3>
                                <span className="text-sm block text-gray-400 mt-2">{posts.city} | {posts.address}</span>
                                <p className="text-sm mt-4">{posts.desc}</p>
                                <div className="mt-4 inline-block text-blue-600 text-sm hover:underline"> <Link href={`/blog/${posts._id}`}>Read More</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MaxWidthWrapper>
    );
}

export default Card;
