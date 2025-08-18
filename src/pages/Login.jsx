import { Link } from 'react-router-dom';
function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl mb-4 text-center text-white">
                    <span className="font-normal">Login to </span>
                    <span className="font-bold">Mavent Plan</span>
                </h1>
                <p className="mb-6 text-center text-gray-400">Please enter your credentials to log in.</p>
                <form className="space-y-5">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">
                            Username:
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            required
                            className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {/* <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
                    >
                        Login
                    </button> */}
                    <Link
                        to="/choose-app"
                        className="block w-full bg-blue-600 text-white py-2 rounded-md font-semibold text-center hover:bg-blue-700 transition"
                    >
                        Login
                    </Link>
                </form>
                <p className="mt-4 text-center text-sm text-gray-400">
                    Need help? <a href="/help" className="text-blue-400 hover:underline">Visit our help center</a>.
                </p>
                <p className="text-center text-sm text-gray-400">
                    Back to <a href="/" className="text-blue-400 hover:underline">Home</a>.
                </p>
            </div>
        </div>
    );
}

export default Login;