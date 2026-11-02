function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form>  
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
                    <input
                        type="text"
                        id="username"
                        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md hover:shadow-lg transition-all duration-200"
                >
                    Login
                </button>
            </form>
        </div>
    </div>
  );
}

export default Login;