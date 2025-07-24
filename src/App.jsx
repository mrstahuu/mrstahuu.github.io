import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
            <li><a href="#">Inicio</a></li>
            <li><a href="species.html">Especies</a></li>
            <li><a href="">Reservas</a></li>
            <li><a href="gallery.html">Galeria</a></li>
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
    </main>
    </>
  )
}

export default App
