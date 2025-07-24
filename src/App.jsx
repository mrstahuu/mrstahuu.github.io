import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
 // const [count, setCount] = useState(0);


  let rand = Math.floor(Math.random() * 10000) + 1;

  function News() {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.maventplan.pl/nationalpark/news_api')
      .then(response => {
        if (!response.ok) {
          throw new Error('Błąd sieci: ' + response.status);
        }
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

  if (loading) return <p>Ładowanie wiadomości...</p>;
  if (error) return <p>Błąd: {error}</p>;

  return (
    <>
      {newsItems.map((item, index) => (
        <article className="card" key={index}>
          <div className="card-title">
            <h3>{item.title}</h3>
          </div>
          <div className="card-content">
            <p>{item.content}</p>
          </div>
          <div className="card-footer">
            <a href={item.url}>Read more...</a>
          </div>
        </article>
      ))}
    </>
  );
}

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="images.jpg" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/}
       <header>
        <h1>Parque Natural Sierra Bicuerca</h1>
    </header> 

    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="species.html">Species</a></li>
            <li><a href="gallery.html">Gallery</a></li>
        </ul>
    </nav>
    
    <main>
        <h2>Bienvenidos al Parque Natural</h2>
        <img src="images.jpg" className="image react" alt="React image" />
        <img src="park-narodowy-teide2.jpg" className="image" alt="React image" />
        <hr/>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum cursus mi eget nisi accumsan tristique. Aliquam mattis nibh et diam pharetra dignissim. Vivamus quis vehicula nibh. Mauris augue erat, rutrum ut dolor quis, laoreet commodo tellus. Cras vel vehicula metus.  
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum cursus mi eget nisi accumsan tristique. Aliquam mattis nibh et diam pharetra dignissim. Vivamus quis vehicula nibh. Mauris augue erat, rutrum ut dolor quis, laoreet commodo tellus. Cras vel vehicula metus.  
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum cursus mi eget nisi accumsan tristique. Aliquam mattis nibh et diam pharetra dignissim. Vivamus quis vehicula nibh. Mauris augue erat, rutrum ut dolor quis, laoreet commodo tellus. Cras vel vehicula metus.  
        </p>
        <h2 id="news_header">News</h2>
          <hr/>
        <section id="news_cont">
          
          <News />
        </section>
    </main>
    <footer>
      <h3>Number of visits: {rand}</h3>
    </footer>
    </>
  )
}

export default App
