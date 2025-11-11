import React, { useEffect, useState } from "react";

const STATUS_COLORS = {
    "Wykonane": "bg-green-500",
    "W trakcie wykonywania": "bg-yellow-400",
    "Do wykonania": "bg-orange-500",
    "Nie zaczęte": "bg-red-500",
    "Inny": "bg-gray-500",
};

const STATUS_ORDER = [
    "Wykonane",
    "W trakcie wykonywania",
    "Do wykonania",
    "Nie zaczęte",
    "Inny",
];

const MatuReadyHome = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "MatuReady - Pytania jawne";
        fetch("https://api.maventplan.pl/matu_ready/polski_pytania-jawne")
            .then((res) => res.json())
            .then((data) => {
                setQuestions(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    // Oblicz procenty dla każdego statusu
    const statusCounts = {
        "Wykonane": 0,
        "W trakcie wykonywania": 0,
        "Do wykonania": 0,
        "Nie zaczęte": 0,
        "Inny": 0,
    };
    questions.forEach(q => {
        if (statusCounts.hasOwnProperty(q.status)) {
            statusCounts[q.status]++;
        } else if (q.status) {
            statusCounts["Inny"]++;
        }
    });
    const total = questions.length || 1; // zapobiega dzieleniu przez 0

    // Precyzyjne wyliczanie procentów, aby suma zawsze wynosiła 100%
    let rawPercents = STATUS_ORDER.map(status => ({
        status,
        count: statusCounts[status],
        percent: total ? (statusCounts[status] / total) * 100 : 0,
        color: STATUS_COLORS[status],
    }));

    // Zaokrąglamy w dół, sumujemy, a resztę dodajemy do statusów z największą resztą dziesiętną
    let flooredPercents = rawPercents.map(s => ({
        ...s,
        percent: Math.floor(s.percent)
    }));
    let sumFloored = flooredPercents.reduce((acc, s) => acc + s.percent, 0);
    let diff = 100 - sumFloored;

    if (diff > 0) {
        // Bierzemy tylko statusy, które mają count > 0
        let remainders = rawPercents
            .map((s, i) => ({
                idx: i,
                remainder: s.count > 0 ? s.percent - Math.floor(s.percent) : -1
            }))
            .filter(s => s.remainder > -1);

        // Sortujemy malejąco po reszcie dziesiętnej
        remainders.sort((a, b) => b.remainder - a.remainder);

        for (let i = 0; i < diff && i < remainders.length; i++) {
            flooredPercents[remainders[i].idx].percent += 1;
        }
    }

    // Filtrujemy tylko te, które mają count > 0
    const statusPercents = flooredPercents.filter(s => s.count > 0);

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 px-2 py-4 flex flex-col items-center">
            <div className="w-full max-w-4xl">
                <h2 className="text-2xl font-bold mb-4 text-center">MatuReady - Pytania jawne</h2>
                <div className="mb-6 bg-gray-800 rounded-lg p-4 text-sm sm:text-base overflow-x-auto">
                    <span className="block font-semibold text-lg mb-2">PLAN USTNEJ WYPOWIEDZI ARGUMENTACYJNEJ NA MATURZE 2025</span>
                    <span className="block mb-2">1. <b>WSTĘP:</b><br />
                        - definicja pojęć kluczowych, wprowadzenie do tematu;<br />
                        - teza.</span>
                    <span className="block mb-2">2. <b>ARGUMENT PIERWSZY</b> – myśl ogólna uzasadniająca tezę wraz z przykładem z tekstu wskazanego w poleceniu. Wnioski cząstkowe.</span>
                    <span className="block mb-2">3. <b>KONTEKST</b> – inny tekst stanowiący tło do analizy lektury wskazanej w poleceniu pod kątem uzasadnienia argumentu odwołującego się do tezy. Wnioski cząstkowe.</span>
                    <span className="block mb-2">4. <b>ZAKOŃCZENIE</b><br />
                        OGÓLNE WNIOSKI WYNIKAJĄCE Z ANALIZY POSZCZEGÓLNYCH TEKSTÓW.<br />
                        POWTÓRZENIE TEZY.<br />
                        WŁASNA REFLEKSJA WARTOŚCIUJĄCA.<br />
                        <i>Konteksty mogą znajdować się w różnych częściach pracy.</i>
                    </span>
                </div>

                {/* Pasek postępu statusów */}
                <div className="mb-6">
                    <div className="w-full h-6 rounded-lg flex overflow-hidden border border-gray-700">
                        {statusPercents.length === 0 ? (
                            <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-300 text-xs">
                                Brak danych o statusach
                            </div>
                        ) : (
                            statusPercents.map(({ status, percent, color }) => (
                                <div
                                    key={status}
                                    className={`${color} h-full flex items-center justify-center text-xs font-semibold`}
                                    style={{ width: `${percent}%` }}
                                    title={`${status}: ${percent}%`}
                                >
                                    {percent > 10 && (
                                        <span className="px-2">{status} ({percent}%)</span>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                    {/* Legenda pod paskiem */}
                    <div className="flex flex-wrap gap-4 mt-2 text-xs">
                        {STATUS_ORDER.map(status => (
                            <div key={status} className="flex items-center gap-1">
                                <span className={`inline-block w-3 h-3 rounded ${STATUS_COLORS[status]} border border-gray-700`} />
                                <span>{status}</span>
                            </div>
                        ))}
                    </div>
                    {/* Lista statusów z procentami i ilością */}
                    <ul className="mt-4 space-y-2">
                        {statusPercents.map(({ status, percent, count, color }) => (
                            <li key={status} className="flex items-center gap-2">
                                <span className={`inline-block w-3 h-3 rounded ${color} border border-gray-700`} />
                                <span className="font-semibold">{status}</span>
                                <span className="text-gray-300">- {percent}%</span>
                                <span className="text-gray-400">({count} / {total})</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-center">Pytania jawne z języka polskiego</h3>
                {loading ? (
                    <p>Ładowanie danych...</p>
                ) : (
                    <div className="overflow-x-auto w-full">
                        <table className="min-w-[600px] w-full border border-gray-700 bg-gray-900 text-gray-100 text-xs sm:text-sm">
                            <thead>
                                <tr className="bg-gray-800">
                                    <th className="border border-gray-700 px-2 py-1">Nr</th>
                                    <th className="border border-gray-700 px-2 py-1">Utwór</th>
                                    <th className="border border-gray-700 px-2 py-1">Autor</th>
                                    <th className="border border-gray-700 px-2 py-1">Treść pytania</th>
                                    <th className="border border-gray-700 px-2 py-1">Status</th>
                                    <th className="border border-gray-700 px-2 py-1">Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {questions.map((q) => {
                                    // Ustal kolor i tekst statusu
                                    let statusColor = STATUS_COLORS[q.status] || STATUS_COLORS["Inny"];
                                    let statusText = q.status || "brak";
                                    return (
                                        <tr key={q.id} className="hover:bg-gray-800">
                                            <td className="border border-gray-700 px-2 py-1">{q.number}</td>
                                            <td className="border border-gray-700 px-2 py-1">{q.opus}</td>
                                            <td className="border border-gray-700 px-2 py-1">{q.author}</td>
                                            <td className="border border-gray-700 px-2 py-1 whitespace-pre-line break-words max-w-[180px] sm:max-w-[300px]">{q.question}</td>
                                            <td className="border border-gray-700 px-2 py-1">
                                                {q.status ? (
                                                    <span className="flex items-center gap-2">
                                                        <span className={`inline-block w-3 h-3 rounded ${statusColor} border border-gray-700`} />
                                                        <span>{statusText}</span>
                                                    </span>
                                                ) : (
                                                    <span className="text-gray-400 italic">brak</span>
                                                )}
                                            </td>
                                            <td className="border border-gray-700 px-2 py-1">
                                                {q.link ? (
                                                    <a
                                                        href={q.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition block text-center"
                                                    >
                                                        Przejdź do
                                                    </a>
                                                ) : (
                                                    <span className="text-gray-400 italic">brak</span>
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MatuReadyHome;