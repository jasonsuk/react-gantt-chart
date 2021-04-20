import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header.component.jsx';
import Footer from './components/Footer.component.jsx';

import HomePage from './pages/HomePage.js';

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Route to="/" component={HomePage} exact></Route>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
