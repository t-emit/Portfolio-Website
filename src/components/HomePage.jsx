// src/components/HomePage.jsx

import Header from './Header';
import About from './About';
import Projects from './Project';
import Achievements from './Achievements';
import Skills from './skill';
import Resume from './Resume';
import Contact from './Contact';

// This component is just the sections of your main page
export default function HomePage() {
  return (
    <>
      <Header />
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="achievements"><Achievements /></section>
      <section id="Skills"><Skills /></section>
      <section id="resume"><Resume /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}