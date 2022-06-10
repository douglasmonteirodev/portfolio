import React from "react";
import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portifolio from "./components/portifolio/Portifolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export default function App() {
    return (
        <>
            <Hero />
            <Nav />
            <About />
            <Experience />
            <Portifolio />
            <Contact />
            <Footer />
        </>
    );
}