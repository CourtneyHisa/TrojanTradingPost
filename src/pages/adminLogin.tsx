export default function adminLogin() {  
    return (
        <div className="bg-gray-50 dark:bg-gray-900 font-mhs"> 
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                            <form className="space-y-4 md:space-y-6 group" noValidate>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white h-24">
                                    <span>Email</span>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="w-full rounded-lg border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-neutral-800 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                                        placeholder=" "
                                        required
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                    />
                                        <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                                            Please enter a valid email address
                                        </span>
                                   
                                </label>
                                <label htmlFor="password" className="mb-5">
                                    <span>Password</span>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="w-full rounded-lg border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-neutral-800 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                                        placeholder=" "
                                        required
                                        // pattern=".{7,}"
                                    />
                                    <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                                        Please enter a password
                                    </span>
                                </label>
                                <button type="submit" className="items-center mt-5 bg-blue-500 py-3 w-full rounded-lg text-white group-invalid:pointer-events-none group-invalid:opacity-30">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>




        </div>
    )
}