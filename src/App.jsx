import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Breadcrumb from "./components/Breadcrumb.jsx";
import Banner from './components/Banner.jsx';
import ContactSection from './components/Contact.jsx';
import { XMarkIcon } from '@heroicons/react/20/solid'; // do mini-banera z info ze strona w budowie


function News() {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.maventplan.pl/nationalpark/news_api')
      .then(response => {
        if (!response.ok) throw new Error('Błąd sieci: ' + response.status);
        return response.json();
      })
      .then(data => {
        setNewsItems(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Ładowanie aktualności...</p>;
  if (error) return <p>Błąd: {error}</p>;

  return (
    <section className="news">
      <h2>Aktualności</h2>
      <hr />
      {newsItems.map((item, index) => (
        <article className="card" key={index}>
          <div className="card-title">
            <h3>{item.title}</h3>
          </div>
          <div className="card-content">
            <p>{item.content}</p>
          </div>
          <div className="card-footer">
            <a href={item.url}>Czytaj więcej...</a>
          </div>
        </article>
      ))}
    </section>
  );
}


function App() {

    const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Test", href: "test"}
  ];

  return (
    <>
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-red-500 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-577/310 w-144.25 bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-577/310 w-144.25 bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm/6 text-gray-900">
          <strong className="font-semibold">Warning</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          Page under construction
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          Some elements may not work
        </p>
        
      </div>
      <div className="flex flex-1 justify-end">
      
      </div>
    </div>
    <Navbar />
    <Banner
        backgroundImageUrl="cloud-computing.jpg"
        title="Stanisław Maik"
        description="Web Applications, Web Pages, UI/UX, Databases"
        primaryButtonText="Contact"
        primaryButtonHref="#"
        secondaryButtonText="Learn more"
        secondaryButtonHref="#"
      />
      <section className="flex justify-center my-5">
      <ContactSection />
      </section>
      <header>
        <h1>Stanisław Maik</h1>
        <p className="text-center">Web Applications, Web Pages, UI/UX, Databases</p>
      </header>

      <nav>
        <ul>
          <li><a href="#about">About me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main>
        <section id="about">
          <h2>O mnie</h2>
          <p>
            Cześć! Jestem Jan, frontend developer specjalizujący się w technologiach React, Vite, Tailwind CSS. Tworzę nowoczesne i responsywne interfejsy użytkownika z naciskiem na dostępność i wydajność.
          </p>
        </section>

        <section id="projects">
          <h2>Wybrane projekty</h2>
          <div className="card">
            <h3>🛒 Sklep internetowy</h3>
            <p>Aplikacja e-commerce z płatnościami Stripe, React Router i integracją z REST API.</p>
          </div>
          <div className="card">
            <h3>📸 Galeria zdjęć</h3>
            <p>Dynamiczna galeria z podglądem zdjęć, filtrowaniem i lazy loadingiem.</p>
          </div>
          <div className="card">
            <h3>📅 Kalendarz zadań</h3>
            <p>Planer zadań z lokalnym przechowywaniem danych i przypomnieniami.</p>
          </div>
        </section>

        <News />

        <section id="contact">
          <h2>Kontakt</h2>
          <p>📧 Email: jan.kowalski@example.com</p>
          <p>🌐 GitHub: <a href="https://github.com/jankowalski">github.com/jankowalski</a></p>
          <p>💼 LinkedIn: <a href="https://linkedin.com/in/jankowalski">linkedin.com/in/jankowalski</a></p>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Jan Kowalski. Wszystkie prawa zastrzeżone.</p>
      </footer>
    </>
  );
}

export default App;
