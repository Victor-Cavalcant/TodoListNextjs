import Link from "next/link"
function users() {
    console.log("I am a Client Component!")

    return (
        <div className="flex min-h-screen flex-col items-center justify-center text-6xl">
            <ul className="mt-10">
                <li className="mb-5 rounded-full bg-slate-800 p-4">
                    <Link href="/dashboard/users/1">User 1</Link>
                </li>
                <li className="mb-5 rounded-full bg-slate-800 p-4">
                    <Link href="/dashboard/users/2">User 2</Link>
                </li>
                <li className="mb-5 rounded-full bg-slate-800 p-4">
                    <Link href="/dashboard/users/3">User 3</Link>
                </li>
                <li className="mb-5 rounded-full bg-slate-800 p-4">
                    <Link href="/dashboard/users/4">User 4</Link>
                </li>
            </ul>
        </div>
    )
}

export default users