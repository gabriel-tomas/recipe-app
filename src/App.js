import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import history from './services/history';
import GlobalStyles, { Main, BackBlocker } from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Main>
        <Routes />
        <GlobalStyles />
      </Main>
      <ToastContainer autoClose={2500} className="toast-container" />
      <Footer />
      <BackBlocker className="back-blocker" />
    </Router>
  );
}

export default App;
