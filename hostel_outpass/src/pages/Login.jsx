function Login() {
  return (
    <>
    <div  className="h-full p-10">
        <div className="max-w-5/12 p-3 mx-auto rounded-3xl shadow-md border border-gray-300 bg-white p-10">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTow6P_oAIjsbN1Gx_znzWpYbUdRb2hzgLGCYd7T1g04A&s=10" alt="AITAM Logo" className="w-20 h-20 mx-auto" />
            <h1 className="text-2xl font-bold text-center">Hostel GatePass Portal</h1>
            <p className="text-center">Aditya Institute Of Technology And Management</p>
            <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
                <form className="space-y-4 mb-1">
                    <label htmlFor="username" className="block mt-4 text-sm font-medium text-gray-700">Username</label>
                    <input type="text" id="username" name="username" className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
                    <label htmlFor="password" className="block mt-4 text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="password" name="password" className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
                    <button type="submit" className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-500">
                      Login
                    </button>
                </form>
            </div>
        </div>
    </div>
    <div  className="min-h-screen bg-gray-100">
    <div className="max-w-full mx-auto bg-gray-100 rounded-lg shadow-md">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTow6P_oAIjsbN1Gx_znzWpYbUdRb2hzgLGCYd7T1g04A&s=10" alt="AITAM Logo" className="w-20 h-20 mx-auto mt-10" />
        <h1 className="text-2xl font-bold text-center">Hostel GatePass Portal</h1>
        <p className="text-center">Aditya Institute Of Technology And Management</p>
    </div>
    </div>
    </>
  );
}

export default Login;