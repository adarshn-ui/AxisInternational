import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { Divisions } from './components/Divisions';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { LogoOptions } from './components/LogoOptions';
import { Partners } from './components/Partners';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Divisions />
      <Partners />
      <Footer />
    </div>
  );
}