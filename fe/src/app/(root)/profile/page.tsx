import Image from "next/image"
import logoLogout from "../../../assets/profile_6.webp"

const Profile = () => {
    return (
        <div>

            <div className="bg-gray-100">
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                        <div className="col-span-4 sm:col-span-3">
                            <div className="bg-white shadow rounded-lg p-6">
                                <div className="flex flex-col items-center">
                                    <Image src={logoLogout} className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0" alt="Picture of the author"></Image>
                                    <h1 className="text-xl font-bold">Ngoc Truyen</h1>
                                    <p className="text-gray-700">Software Developer</p>
                                </div>
                                <hr className="my-6 border-t border-gray-300" />
                                <div className="flex flex-col">
                                    <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">information</span>
                                    <ul>
                                        <li className="mb-2">Email: phantruyen19722@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 sm:col-span-9">
                            <div className="bg-white shadow rounded-lg p-6">
                                <h2 className="text-xl font-bold mb-4">About Me</h2>
                                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est
                                    vitae tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                    suscipit. Nunc finibus vel ante id euismod. Vestibulum ante ipsum primis in faucibus orci luctus
                                    et ultrices posuere cubilia Curae; Aliquam erat volutpat. Nulla vulputate pharetra tellus, in
                                    luctus risus rhoncus id.
                                </p>

                                <h3 className="font-semibold text-center mt-3 -mb-2">
                                    Find me on
                                </h3>



                                <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
                                <div className="font-sans overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-100 whitespace-nowrap">
                                            <tr>
                                                <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                    Name
                                                </th>
                                                <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                    Email
                                                </th>
                                                <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                    Role
                                                </th>
                                                <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                    Joined At
                                                </th>
                                                <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
                                            <tr>
                                                <td className="px-4 py-4 text-sm text-gray-800">
                                                    John Doe
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-800">
                                                    john@example.com
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-800">
                                                    Admin
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-800">
                                                    2022-05-15
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-800">
                                                    <button className="text-blue-600 mr-4">Edit</button>
                                                    <button className="text-red-600">Delete</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="px-4 py-4 text-sm text-gray-800">
                                                    Jane Smith
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-800">
                                                    jane@example.com
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-800">
                                                    User
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-800">
                                                    2022-07-20
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-800">
                                                    <button className="text-blue-600 mr-4">Edit</button>
                                                    <button className="text-red-600">Delete</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="px-4 py-4 text-sm text-gray-800">
                                                    Alen doe
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-800">
                                                    alen@example.com
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-800">
                                                    User
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-800">
                                                    2022-07-21
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-800">
                                                    <button className="text-blue-600 mr-4">Edit</button>
                                                    <button className="text-red-600">Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Profile