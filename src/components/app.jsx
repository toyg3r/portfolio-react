import React from "react";
import Header from "./header";
import Banner from "./banner";
import About from "./about";
import Education from "./education";
import Skills from "./skill";
import Project from "./projects";
import Contact from "./contact";
import Footer from "./footer";
function App(){
    return(
        <div>
        <Header />
        <Banner />
        <About />
        <Education />
        <Skills />
        <Project />
        <Contact />
        <Footer />
        </div>
    );
}
export default App;