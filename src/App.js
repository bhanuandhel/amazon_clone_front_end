import React from 'react';
import {useTranslation} from "react-i18next";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NavbarContainer from './components/layout/Navbar/NavbarContainer';
import Footer from './components/layout/Footer';
import LoginContainer from './components/Login/LoginContainer';
import LandingPage from './components/layout/LandingPage';
import RegisterContainer from './components/Register/RegisterContainer';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  const [t, i18n] = useTranslation('common');
  const Login = () => (<LoginContainer t={t} i18n={i18n} />)
  const Register = () => (<RegisterContainer t={t} i18n={i18n} />)
  const Landing = () => (<LandingPage t={t} i18n={i18n} />)
  return (
    <Provider store={store}>
    <Router>
      <NavbarContainer t={t} i18n={i18n} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      <Footer t={t} i18n={i18n} />
    </Router>
    </Provider>
  );
}

export default App;
