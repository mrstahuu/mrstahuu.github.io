import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Layout from './layouts/Layout.jsx';
import Projects from './pages/Projects.jsx';
import Login from './pages/Login.jsx';
import ChooseApp from './pages/ChooseApp.jsx';
// Importy layoutów dla serwisów
import SiteManagerLayout from './layouts/SiteManagerLayout.jsx';
import MatuReadyLayout from './layouts/MatuReadyLayout.jsx';
// Importy przykładowych podstron serwisów
import SiteManagerHome from './pages/site_manager/Home.jsx';
import SiteManagerSettings from './pages/site_manager/Settings.jsx';
import MatuReadyHome from './pages/matu_ready/Home.jsx';
import MatuReadyTest from './pages/matu_ready/Test.jsx';
import MatuReadyPytaniaJawne from './pages/matu_ready/Pytania_Jawne.jsx';
import MatuReadyPisemna from './pages/matu_ready/Pisemna.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/login" element={<Login />} />
          <Route path="/choose-app" element={<ChooseApp />} />
        </Route>
        {/* Sekcja serwisu Site Manager */}
        <Route path="/site_manager" element={<SiteManagerLayout />}>
          <Route index element={<SiteManagerHome />} />
          <Route path="settings" element={<SiteManagerSettings />} />
          {/* Dodaj kolejne podstrony Site Managera tutaj */}
        </Route>

        {/* Sekcja serwisu MatuReady */}
        <Route path="/matu_ready" element={<MatuReadyLayout />}>
          <Route index element={<MatuReadyHome />} />
          <Route path="pytania_jawne" element={<MatuReadyPytaniaJawne />} />
          <Route path="pisemna" element={<MatuReadyPisemna />} />
          <Route path="test" element={<MatuReadyTest />} />
          {/* Dodaj kolejne podstrony MatuReady tutaj */}
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
