import logo from './logo.svg';
import './App.css';
import HomeHero from './components/templates/HomeHero/HomeHero';
import Navbar from './components/UI/organisms/Navbar/Navbar';
import { useState, useEffect } from 'react';
import sanityClient from "./client"

function App() {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          title,
          shortDescription,
          slug,
          tagline,
          overview,
          releaseDate,
          poster,
          externalId,
          imageWithExplanation,
          popularity,
          github,
          liveLink,
          techStackItems,
          projectTypes,
          projectDescriptionSection,
          video,
          imageItems,
          videoGallery,
          color,
    }`
      )
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);
  


  return (
    <div className="App">
      <h1>{console.log(projects)}</h1>
      <Navbar/>
      <HomeHero />
    
    </div>
  );
}

export default App;
