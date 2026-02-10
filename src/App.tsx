import { Analytics } from '@vercel/analytics/react';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Timeline from './components/Timeline';
// import Council from './components/Council';
import Toolkit from './components/Toolkit';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Mission />
      <Timeline />
      {/* <Council /> */}
      <Toolkit />
      <CTASection />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
