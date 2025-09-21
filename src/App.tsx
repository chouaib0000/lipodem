import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import Home from './pages/Home';
import Lipedema from './pages/Lipedema';
import Doctor from './pages/Doctor';
import Center from './pages/Center';
import PatientJourney from './pages/PatientJourney';
import News from './pages/News';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <ContactForm />
              </>
            } />
            <Route path="/lipedema" element={<Lipedema />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/center" element={<Center />} />
            <Route path="/patient-journey" element={<PatientJourney />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;