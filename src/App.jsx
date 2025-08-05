import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Layout from './layouts/Layout.jsx';
import Projects from './pages/Projects.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
