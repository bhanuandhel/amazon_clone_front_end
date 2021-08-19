import React from 'react';
import LandingPage from "./components/layout/LandingPage";
import {useTranslation} from "react-i18next";

function App() {
  const [t, i18n] = useTranslation('common');
  return (
    <>
      <LandingPage t={t} i18n={i18n} />
    </>
  );
}

export default App;
