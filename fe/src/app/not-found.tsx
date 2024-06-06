import Link from 'next/link'

export default function NotFound() {
    return <div className='h-[100vh] flex flex-col justify-center items-center'>
        <h1>Not found – 404!</h1>
        <div>
            <Link href="/">Go back to Home</Link>
        </div>
    </div>
}