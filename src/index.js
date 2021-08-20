import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_in from "./translations/in/common.json";
import common_pk from "./translations/pk/common.json";
import common_bd from "./translations/bd/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
  whitelist: ['pk', 'in', 'bd', 'en'],
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en',                              // language to use
  resources: {
    en: {
      common: common_en               // 'common' is our custom namespace
    },
    bd: {
      common: common_bd
    },
    pk: {
      common: common_pk
    },
    in: {
      common: common_in
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
