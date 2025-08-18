import { Outlet, Link } from "react-router-dom";

const MatuReadyLayout = () => (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <nav className="bg-gray-800 px-6 py-4 flex gap-4">
            <Link to="/matu_ready" className="hover:underline">Strona główna</Link>
            <Link to="/matu_ready/test" className="hover:underline">Test</Link>
        </nav>
        <main className="flex-1 flex flex-col items-center justify-center">
            <Outlet />
        </main>
    </div>
);

export default MatuReadyLayout;