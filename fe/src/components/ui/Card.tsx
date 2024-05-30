// import { Suspense } from 'react';
// import styles from '../../styles/dashboard.module.css'
// import Link from 'next/link';

// async function getData() {
//     const res = await fetch('https://64f49d06932537f4051a87b4.mockapi.io/api/v1/blog');
//     if (!res.ok) {
//         throw new Error('Fail to fetch data');
//     }
//     return res.json();
// }

// export default async function Card() {

//     const data = await getData();

//     return (
//         <div>
//             <h1>All List Nine Dev</h1>
//             <Suspense fallback={<div>Loading...</div>}>
//                 {(data || []).map((item: any) => (
//                     <div >
//                         <h3>{item?.title}</h3>
//                     </div>
//                 ))}
//             </Suspense>
//         </div>
//     )
// }


'use client'
import { useEffect, useState } from "react";
import useSWR from 'swr'

interface BlogData {
    id: string;
    title: string;
    content: string;
    date: string;
    author: string;
}

const Card = (props: any) => {
    // const [data, setData] = useState<BlogData[] | null>(null);
    const fetcher = (url: string) => fetch(url).then(res => res.json())

    const { data, error, isLoading } = useSWR('https://64f49d06932537f4051a87b4.mockapi.io/api/v1/blog', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    })


    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    // const fetchData1 = async () => {
    //     try {
    //         const res = await fetch('https://64f49d06932537f4051a87b4.mockapi.io/api/v1/blog');
    //         const data = await res.json();
    //         setData(data)
    //         console.log(data);

    //     } catch (error) {
    //         console.error("Error fetching data", error);
    //     }
    // };

    // useEffect(() => {
    //     fetchData1();
    // }, [])

    return (
        <div>
            <h1>{data?.length}</h1>
            <div className="mt-4">
                <h2 className="text-lg font-semibold">Blog Posts</h2>
                <ul className="mt-2 space-y-4">
                    {data?.map((post: any) => (
                        <li key={post.id} className="border-b pb-2">
                            <h3 className="text-xl font-bold">{post.title}</h3>
                            <p>{post.content}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Card;
