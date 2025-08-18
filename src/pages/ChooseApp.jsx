import React from "react";
import { Link } from "react-router-dom";

const services = [
    {
        title: "MatuReady",
        description: "Aplikacja do nauki do matury z matematyki.",
        link: "/matu_ready",
    },
    {
        title: "Site Manager",
        description: "Aplikacja do zarządzania stronami internetowymi.",
        link: "/site_manager",
    },
    {
        title: "W przyszłości",
        description: "Tutaj pojawią się kolejne serwisy.",
        link: "#",
    },

    // Dodaj kolejne serwisy tutaj
];

const ChooseApp = () => (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center">
        <div className="w-full flex flex-col items-center justify-center flex-1 py-12">
            <h1 className="text-4xl font-bold mb-10 text-center text-gray-100">
                Wybierz serwis
            </h1>
            <div className="w-full max-w-5xl flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center w-full">
                    {services.map((service, idx) => (
                        <Link
                            to={service.link}
                            key={idx}
                            className="bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow p-8 flex flex-col items-center text-center border border-gray-700 hover:border-blue-400 w-full max-w-xs"
                        >
                            <div className="text-2xl font-semibold mb-4 text-blue-400">
                                {service.title}
                            </div>
                            <div className="text-gray-300 mb-6">{service.description}</div>
                            <span className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                Przejdź
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default ChooseApp;