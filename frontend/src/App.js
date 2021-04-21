import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header.component.jsx';
import Footer from './components/Footer.component.jsx';

import HomePage from './pages/HomePage.js';
import SummaryPage from './pages/SummaryPage.js';

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Container className="my-3">
                    <Route path="/" component={HomePage} exact />
                    <Route path="/summary" component={SummaryPage} />
                </Container>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
