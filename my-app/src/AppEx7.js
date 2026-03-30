import React from 'react';
import {BrowserRouter,Routes, Route, Link} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';

function AppEx7() {
    return (
        <BrowserRouter>
            <h1>App is working</h1>
            <nav>
                <Link to="/">Home</Link> |
                <Link to="/About">About</Link> |
                <Link to="/Contact">Contact</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}
export default AppEx7;
