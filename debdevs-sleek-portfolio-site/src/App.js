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
    {() => {
    setIsData(projects);
    setIsData(projects);
  }}
      {console.log(projects)}
      {console.log(projects[0]?.title)}
      <h1>{projects[1]?.title}</h1>
      <h1>{JSON.stringify(projects)
}</h1>
      <Navbar/>
      <HomeHero projects_data={projects} />
    
    </div>
    </HomeContext.Provider>
  );
  
}

export default App;
