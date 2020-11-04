import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <ToastContainer />
    <AuthProvider>
      <Router>
        <Routes />
      </Router>
    </AuthProvider>
  </>
);

export default App;
