import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Survey from './pages/survey.jsx';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/survey" element={<Survey />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);
