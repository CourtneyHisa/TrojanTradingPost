export default function adminLogin() {  
    return (
        <div>
            <main className="min-h-screen bg-blue-100 flex items-center justify-center text-gray-500 text-sm">
                <form
                    className="bg-white shadow-lg rounded-md p-5 md:p-10 flex flex-col w-11/12 max-w-lg"
                    novalidate
                >
                    <label for="email" class="mb-5">
                    <span>Email</span>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-neutral-800"
                        placeholder=" "
                        required
                    />
                    </label>
                    <label for="password" class="mb-5">
                    <span>Password</span>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-neutral-800"
                        placeholder=" "
                        required
                    />
                    </label>
                    <button type="submit" className="mt-5 bg-blue-500 py-3 rounded-md text-white">Submit</button>
                </form>
                </main>

        </div>
    )
}