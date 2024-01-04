import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Survey from './pages/survey.jsx';
import Header from './components/Header/header.jsx';
import Error from './pages/error.jsx';
import Results from './pages/results.jsx';
import Freelances from './pages/freelances.jsx';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <React.StrictMode>
            <Router>
                <Header />
                <Routes>
                    <Route exact strict path="/" element={<Home />} />
                    <Route
                        path="/survey/:questionNumber"
                        element={<Survey />}
                    />
                    <Route path="/results" element={<Results />} />
                    <Route path="/freelances" element={<Freelances />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </React.StrictMode>
    </React.StrictMode>,
);
