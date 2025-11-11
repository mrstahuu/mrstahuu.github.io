import React, { useEffect, useState } from "react";

const COLORS = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-400",
    "bg-orange-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-teal-500",
    "bg-red-500",
    "bg-gray-500",
    "bg-cyan-500",
    "bg-lime-500",
    "bg-fuchsia-500",
    "bg-indigo-500",
    "bg-amber-500",
    "bg-rose-500",
    "bg-violet-500",
    "bg-sky-500",
    "bg-emerald-500",
    "bg-stone-500",
    "bg-neutral-500",
];

const SVG_COLORS = [
    "#3b82f6", "#22c55e", "#eab308", "#f97316", "#a855f7", "#ec4899", "#14b8a6", "#ef4444", "#6b7280",
    "#06b6d4", "#84cc16", "#d946ef", "#6366f1", "#f59e42", "#fb7185", "#8b5cf6", "#0ea5e9", "#10b981", "#78716c", "#737373"
];

// Gradacja kolorów dla wyników
const SCORE_GRADIENT = [
    { min: 0, max: 39, color: "bg-red-900 bg-opacity-80", text: "text-red-300" },      // bardzo słabo
    { min: 40, max: 54, color: "bg-orange-900 bg-opacity-80", text: "text-orange-300" },// słabo
    { min: 55, max: 69, color: "bg-yellow-900 bg-opacity-80", text: "text-yellow-200" },// dostatecznie
    { min: 70, max: 84, color: "bg-green-900 bg-opacity-80", text: "text-green-200" },  // dobrze
    { min: 85, max: 94, color: "bg-green-950 bg-opacity-80", text: "text-green-300" },  // bardzo dobrze
    { min: 95, max: 100, color: "bg-emerald-900 bg-opacity-80", text: "text-emerald-300" }, // celująco
];

function getScoreColor(score) {
    if (score === null || score === undefined || isNaN(score)) {
        return { color: "", text: "" };
    }
    for (let grad of SCORE_GRADIENT) {
        if (score >= grad.min && score <= grad.max) return grad;
    }
    return { color: "", text: "" };
}

const MatuReadyPisemna = () => {
    const [essays, setEssays] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "MatuReady - Pisemna";
        fetch("https://api.maventplan.pl/matu_ready/polski_wypracowania")
            .then((res) => res.json())
            .then((data) => {
                // Sortuj po id rosnąco (najstarsze na górze, progres widoczny)
                const sorted = [...data].sort((a, b) => Number(a.id) - Number(b.id));
                setEssays(sorted);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    // Filtruj tylko prace z wynikiem (pierwszy lub drugi wynik)
    const essaysWithScore = essays.filter(
        e => (!isNaN(parseFloat(e.first_score)) && e.first_score) || (!isNaN(parseFloat(e.second_score)) && e.second_score)
    );

    // Statystyki
    const totalEssays = essaysWithScore.length;
    const avgScore = totalEssays
        ? (
            essaysWithScore.reduce((acc, e) => acc + (parseFloat(e.second_score || e.first_score || 0)), 0) / totalEssays
        ).toFixed(2)
        : "0.00";

    // Przygotuj dane do wykresu
    const chartScores = essays.map(e => parseFloat(e.first_score || 0));
    const chartCorrections = essays.map(e => parseFloat(e.second_score || 0));

    return (
        <div className="w-full max-w-3xl mx-auto px-2 py-4">
            <h2 className="text-3xl font-bold mb-6 text-center">MatuReady - Prace pisemne</h2>

            {/* Card z propozycją schematu */}
            <div className="mb-6 bg-gray-800 rounded-lg p-4 text-sm sm:text-base overflow-x-auto">
                <span className="block font-semibold text-lg mb-2">PROPOZYCJA SCHEMATU KOMPOZYCJI WYPOWIEDZI ARGUMENTACYJNEJ NA MATURZE 2025</span>
                <span className="block mb-2">1. <b>WSTĘP:</b><br />
                    - definicja pojęć kluczowych, wprowadzenie do tematu;<br />
                    - teza.
                </span>
                <span className="block mb-2">2. <b>ROZWINIĘCIE:</b><br />
                    <b>A) ARGUMENT PIERWSZY</b> – myśl ogólna uzasadniająca tezę wraz z przykładem z lektury obowiązkowej i kontekstami (innym tekstem literackim stanowiącym tło do analizy lektury obowiązkowej pod kątem uzasadnienia argumentu odwołującego się do tezy oraz inne konteksty pasujące do wywodu np. wiedza o życiu autora, informacje o epoce, myśli filozoficzne).<br />
                    Wnioski cząstkowe.<br />
                    <b>B) ARGUMENT DRUGI</b> – myśl ogólna uzasadniająca tezę wraz z przykładem z tekstu literackiego i kontekstami (innym tekstem literackim stanowiącym tło do analizy lektury obowiązkowej pod kątem uzasadnienia argumentu odwołującego się do tezy oraz inne konteksty pasujące do wywodu np. wiedza o życiu autora, informacje o epoce, myśli filozoficzne).<br />
                    Wnioski cząstkowe.
                </span>
                <span className="block mb-2">3. <b>ZAKOŃCZENIE</b><br />
                    OGÓLNE WNIOSKI WYNIKAJĄCE Z ANALIZY POSZCZEGÓLNYCH TEKSTÓW.<br />
                    POWTÓRZENIE TEZY.<br />
                    WŁASNA REFLEKSJA WARTOŚCIUJĄCA.<br />
                    <i>Konteksty mogą znajdować się w różnych częściach pracy.</i>
                </span>
            </div>

            {/* Card statystyki */}
            <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="bg-blue-900 rounded-xl shadow-lg px-8 py-6 flex flex-col items-center w-full sm:w-1/2">
                    <span className="text-lg text-gray-200 mb-2">Liczba napisanych prac</span>
                    <span className="text-4xl font-bold text-blue-300">{totalEssays}</span>
                </div>
                <div className="bg-green-900 rounded-xl shadow-lg px-8 py-6 flex flex-col items-center w-full sm:w-1/2">
                    <span className="text-lg text-gray-200 mb-2">Średni wynik</span>
                    <span className="text-4xl font-bold text-green-300">{avgScore}</span>
                </div>
            </div>

            {/* Wykres progresu - każda praca to osobny kolor */}
            <div className="mb-8 bg-gray-800 rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-4 text-center text-gray-100">Progres prac</h3>
                {essays.length === 0 ? (
                    <p className="text-gray-400 text-center">Brak danych do wykresu.</p>
                ) : (
                    <div className="w-full overflow-x-auto">
                        <svg height="220" width={Math.max(essays.length * 120, 400)}>
                            {/* Oś Y */}
                            <line x1="40" y1="20" x2="40" y2="180" stroke="#ccc" />
                            {/* Oś X */}
                            <line x1="40" y1="180" x2={Math.max(essays.length * 120, 400) - 20} y2="180" stroke="#ccc" />
                            {/* Słupki dla każdej pracy */}
                            {essays.map((e, i) => {
                                const x = 60 + i * 100;
                                const firstScore = parseFloat(e.first_score);
                                const secondScore = parseFloat(e.second_score);
                                const firstY = isNaN(firstScore) ? 180 : 180 - (firstScore / 100) * 160;
                                const secondY = isNaN(secondScore) ? 180 : 180 - (secondScore / 100) * 160;
                                const colorIdx = i % SVG_COLORS.length;
                                return (
                                    <g key={e.id}>
                                        {/* Słupek pierwszy wynik */}
                                        {!isNaN(firstScore) && e.first_score ? (
                                            <>
                                                <rect
                                                    x={x - 18}
                                                    y={firstY}
                                                    width="16"
                                                    height={180 - firstY}
                                                    fill={SVG_COLORS[colorIdx]}
                                                    opacity="0.7"
                                                />
                                                <text
                                                    x={x - 10}
                                                    y={firstY - 6}
                                                    fill={SVG_COLORS[colorIdx]}
                                                    fontSize="11"
                                                    textAnchor="middle"
                                                >
                                                    {e.first_score}
                                                </text>
                                            </>
                                        ) : (
                                            <text
                                                x={x - 10}
                                                y={195}
                                                fill="#aaa"
                                                fontSize="11"
                                                textAnchor="middle"
                                            >
                                                brak
                                            </text>
                                        )}
                                        {/* Słupek poprawiony wynik */}
                                        {!isNaN(secondScore) && e.second_score ? (
                                            <>
                                                <rect
                                                    x={x + 2}
                                                    y={secondY}
                                                    width="16"
                                                    height={180 - secondY}
                                                    fill={SVG_COLORS[colorIdx]}
                                                    opacity="1"
                                                />
                                                <text
                                                    x={x + 10}
                                                    y={secondY - 6}
                                                    fill={SVG_COLORS[colorIdx]}
                                                    fontSize="11"
                                                    textAnchor="middle"
                                                >
                                                    {e.second_score}
                                                </text>
                                            </>
                                        ) : null}
                                        {/* Etykieta pracy */}
                                        <text
                                            x={x}
                                            y={205}
                                            fill="#fff"
                                            fontSize="11"
                                            textAnchor="middle"
                                        >
                                            {e.topic.length > 18 ? e.topic.slice(0, 15) + "..." : e.topic}
                                        </text>
                                    </g>
                                );
                            })}
                            {/* Oznaczenia osi Y */}
                            {[0, 20, 40, 60, 80, 100].map(val => (
                                <text
                                    key={val}
                                    x={28}
                                    y={180 - (val / 100) * 160 + 4}
                                    fill="#ccc"
                                    fontSize="10"
                                    textAnchor="end"
                                >
                                    {val}
                                </text>
                            ))}
                        </svg>
                        <div className="flex gap-2 mt-2 text-xs flex-wrap justify-center">
                            {essays.map((e, i) => (
                                <div key={e.id} className="flex items-center gap-2 mb-1">
                                    <span className={`inline-block w-4 h-4 rounded-full ${COLORS[i % COLORS.length]}`} />
                                    <span>{e.topic.length > 18 ? e.topic.slice(0, 15) + "..." : e.topic}</span>
                                    {e.notes && e.notes.toLowerCase().includes("do napisania") && (
                                        <span className="text-red-400 font-bold ml-1" title="Do napisania">!</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Tabela prac */}
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-center text-gray-100">Lista prac</h3>
                {loading ? (
                    <p className="text-gray-400 text-center">Ładowanie danych...</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-[700px] w-full border border-gray-700 bg-gray-900 bg-opacity-95 text-gray-100 text-xs sm:text-sm rounded-lg">
                            <thead>
                                <tr className="bg-gray-900 bg-opacity-90">
                                    <th className="border border-gray-700 px-2 py-1">ID</th>
                                    <th className="border border-gray-700 px-2 py-1">Temat</th>
                                    <th className="border border-gray-700 px-2 py-1">Data napisania</th>
                                    <th className="border border-gray-700 px-2 py-1">Pierwszy wynik</th>
                                    <th className="border border-gray-700 px-2 py-1">Data poprawy</th>
                                    <th className="border border-gray-700 px-2 py-1">Wynik po poprawie</th>
                                    <th className="border border-gray-700 px-2 py-1">Notatki</th>
                                </tr>
                            </thead>
                            <tbody>
                                {essays.map(e => {
                                    const firstScore = parseFloat(e.first_score);
                                    const secondScore = parseFloat(e.second_score);
                                    const firstGrad = getScoreColor(firstScore);
                                    const secondGrad = getScoreColor(secondScore);
                                    return (
                                        <tr key={e.id} className="hover:bg-gray-800">
                                            <td className="border border-gray-700 px-2 py-1">{e.id}</td>
                                            <td className="border border-gray-700 px-2 py-1">
                                                {e.topic}
                                                {e.notes && e.notes.toLowerCase().includes("do napisania") && (
                                                    <span className="text-red-400 font-bold ml-1" title="Do napisania">!</span>
                                                )}
                                            </td>
                                            <td className="border border-gray-700 px-2 py-1">{e.date_written}</td>
                                            <td className={`border border-gray-700 px-2 py-1 ${firstGrad.color} ${firstGrad.text} font-semibold`}>
                                                {!isNaN(firstScore) && e.first_score
                                                    ? e.first_score
                                                    : <span className="text-gray-400 italic">brak</span>}
                                            </td>
                                            <td className="border border-gray-700 px-2 py-1">{e.correction_date || <span className="text-gray-400 italic">brak</span>}</td>
                                            <td className={`border border-gray-700 px-2 py-1 ${secondGrad.color} ${secondGrad.text} font-semibold`}>
                                                {!isNaN(secondScore) && e.second_score
                                                    ? e.second_score
                                                    : <span className="text-gray-400 italic">brak</span>}
                                            </td>
                                            <td className="border border-gray-700 px-2 py-1">
                                                {e.notes
                                                    ? (
                                                        <>
                                                            {e.notes}
                                                            {e.notes.toLowerCase().includes("do napisania") && (
                                                                <span className="text-red-400 font-bold ml-1" title="Do napisania">!</span>
                                                            )}
                                                        </>
                                                    )
                                                    : <span className="text-gray-400 italic">brak</span>
                                                }
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        {/* Legenda kolorów */}
                        <div className="flex flex-wrap gap-4 mt-4 text-xs">
                            {SCORE_GRADIENT.map((grad, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <span className={`inline-block w-4 h-4 rounded ${grad.color} border border-gray-700`} />
                                    <span>
                                        {grad.min} - {grad.max}%
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MatuReadyPisemna;