import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Education, Hero, Navbar, StarsCanvas, Tech, Works, GoToTop, } from './components';

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-primary">
        <Navbar />
        <div className="relative z-0 bg-gradient-to-br from-primary via-primary to-purple-950">
          <Hero />
          {/* <LofiAudioPlayer /> */}
          <StarsCanvas />
        </div>
        <div>
          <div className="relative z-0 bg-gradient-to-tr from-primary via-primary to-purple-950"><About /></div>
          <div className="relative z-0 bg-gradient-to-bl from-primary via-primary to-blue-950"><Education /></div>
          <div className="relative z-0 bg-gradient-to-tl from-primary via-primary to-blue-950"><Tech /></div>
          <div className="relative z-0 bg-gradient-to-br from-primary via-primary to-purple-950"><Works /></div>
          <div className="relative z-0 bg-gradient-to-tr from-primary via-primary to-purple-950">
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
              <GoToTop/>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
