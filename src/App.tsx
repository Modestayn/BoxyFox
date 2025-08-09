import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LoadingLogo } from './components/LoadingLogo';
import { Navbar } from './components/Navbar';
import { PhoneButton } from './components/PhoneButton'; // <- кнопка телефона

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';

const App = () => {
  const { i18n } = useTranslation();
  const [loadingFinished, setLoadingFinished] = useState(false);
  const [, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    const onLangChanged = (lng: string) => {
      setCurrentLang(lng);
    };
    i18n.on('languageChanged', onLangChanged);
    return () => {
      i18n.off('languageChanged', onLangChanged);
    };
  }, [i18n]);

  if (!loadingFinished) {
    return <LoadingLogo onFinish={() => setLoadingFinished(true)} />;
  }

  return (
    <Router>
      <div className='flex flex-col min-h-screen relative'>
        <Navbar />
        <main className='flex flex-col justify-center items-center flex-grow gap-4'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>

        <PhoneButton />
      </div>
    </Router>
  );
};

export default App;
