import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import ProjectPage from './pages/ProjectPage';
import ScrollToTop from './utils/ScrollToTop';

import './styles/main.css';

const App = () => {
    return (
        <div className="App">
            <Router>
                <ScrollToTop />
                <Navbar />
                <Routes>
                    <Route path="/portfolio-project" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/project/:id" element={<ProjectPage />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
