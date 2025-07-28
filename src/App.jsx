import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Breadcrumb from "./components/Breadcrumb.jsx";
import Banner from './components/Banner.jsx';
import Footer from './components/Footer.jsx';
import ContactSection from './components/home/Contact.jsx';
import SkillsSection from './components/home/Skills.jsx';

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
        primaryButtonHref="#contact"
        secondaryButtonText="Learn more"
        secondaryButtonHref="#skills"
      />
     
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="contact" className="flex justify-center my-5">
      <ContactSection />
      </section>
      <Footer />
    
    
    </>
  );
}

export default App;
