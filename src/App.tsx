import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import AuthContext from './context/AuthContext';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AuthContext.Provider value={{ name: 'Giovani' }}>
      <Router>
        <Routes />
      </Router>
    </AuthContext.Provider>
  </>
);

export default App;
