import { Outlet, Link } from "react-router-dom";

const MatuReadyLayout = () => (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <nav className="bg-gray-800 px-4 py-3 flex flex-wrap gap-2 sm:gap-4 w-full">
            <Link to="/matu_ready" className="hover:underline whitespace-nowrap">Strona główna</Link>
            <Link to="/matu_ready/test" className="hover:underline whitespace-nowrap">Test</Link>
        </nav>
        <main className="flex-1 flex flex-col items-center justify-start w-full px-2 py-4">
            <div className="w-full max-w-4xl">
                <Outlet />
            </div>
        </main>
    </div>
);

export default MatuReadyLayout;