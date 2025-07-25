import { useState, useEffect } from 'react'
import './App.css'

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
  return (
    <>
      <header>
        <h1>Portfolio – Jan Kowalski</h1>
        <p>Frontend Developer • React • UI/UX</p>
      </header>

      <nav>
        <ul>
          <li><a href="#about">O mnie</a></li>
          <li><a href="#projects">Projekty</a></li>
          <li><a href="#contact">Kontakt</a></li>
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
