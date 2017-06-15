import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';
import Content from './Content';

const App = () => (
  <Router>
    <div>
      <Header />
      <div className="content">
        <Content />
      </div>
    </div>
  </Router>
)

export default App;
