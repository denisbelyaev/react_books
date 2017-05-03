import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Main from './Main';

const App = () => (
    <Router>
        <div>
            <Header />
            <Main />
        </div>
    </Router>
)

export default App;
