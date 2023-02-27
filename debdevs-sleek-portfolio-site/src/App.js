import logo from './logo.svg';
import './App.css';
import HomeHero from './components/templates/HomeHero/HomeHero';
import Navbar from './components/UI/organisms/Navbar/Navbar';
import { useState, useEffect } from 'react';
import sanityClient from "./client"
import { useContext } from 'react';
import { HomeContext } from './HomeContext.js'
function App() {
  const [projects, setProjects] = useState([]);
  let data1 = useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          ...,
          
          "techStackItems": techStackItems[]{
            ...
            tech->
          },
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
  

  const [isActive, setIsActive] = useState(false);
  const { isData, setIsData } = useContext(HomeContext);

  return (
    <HomeContext.Provider
    value={{
      isActive,
      setIsActive,

    }}
  >
    <div className="App">

      <Navbar/>
      <HomeHero projects_data={projects} />
    
    </div>
    </HomeContext.Provider>
  );
  
}

export default App;
