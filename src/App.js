import React, { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import AppHeader from "./components/header";
import AppHero from "./components/hero";
import AppAbout from "./components/about";
import AppServices from "./components/services";
import AppWorks from "./components/works";
import AppTeams from "./components/teams";
import AppTestimonials from "./components/testimonials";
import  AppPricing from "./components/pricing";
import AppBlock from "./components/block";
import AppContact from "./components/contact";
import AppFooter from "./components/footer";

function App() {
  return (
    <>
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppAbout />
        <AppServices />
        <AppWorks />
        <AppTeams />
        <AppTestimonials />
        <AppPricing />
        <AppBlock />
        <AppContact />
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </>
  );
}

export default App;
