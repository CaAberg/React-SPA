import React, { useState } from 'react';
import Footer from "./assets/components/Footer"
import Navbar from "./assets/components/Navbar"
import Header from "./assets/components/Header"
import AboutMe from "./assets/components/Homepage/AboutMe"
import Experience from "./assets/components/Homepage/Experience"
import Introduction from './assets/components/Homepage/Introduction'
import Navigation from './assets/components/Navigation/Index';
import Contact from './assets/components/Homepage/Contact';


const App = () => {
  const [currentPage, setCurrentPage] = useState('Introduction');

  const images = {
    Introduction: '/images/introduction.jpg',
    AboutMe: '/images/aboutme.jpg',
    Experience: '/images/experiences.jpg',
    Contact: '/images/contact.jpg'
  };

  const renderPage = () => {
    const image = images[currentPage];
    switch (currentPage) {
      case 'Introduction':
        return <Introduction image={image} />;
      case 'AboutMe':
        return <AboutMe image={image}/>;
      case 'Experience':
        return <Experience image={image}/>;
        case 'Contact':
        return <Contact image={image}/>;
      default:
        return <Introduction image={image}/>;
    };
  };

  return (
    <>
    <Navbar setCurrentPage={setCurrentPage}/>
    <div class="pb-20">
    <Header/>
    <Navigation setCurrentPage={setCurrentPage} />
    {renderPage()}
    </div>
    <Footer/>
    </>
  );
};

export default App
