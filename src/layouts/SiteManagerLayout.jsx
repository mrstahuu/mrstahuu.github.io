import { Outlet, Link } from "react-router-dom";

const SiteManagerLayout = () => (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <nav className="bg-gray-800 px-6 py-4 flex gap-4">
            <Link to="/site_manager" className="hover:underline">Strona główna</Link>
            <Link to="/site_manager/settings" className="hover:underline">Ustawienia</Link>
        </nav>
        <main className="flex-1 flex flex-col items-center justify-center">
            <Outlet />
        </main>
    </div>
);

export default SiteManagerLayout;