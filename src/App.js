import { Routes, Route } from 'react-router-dom';

import "./App.css";
import "./Components/Header/Header";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import GenerateEpisodeHome from "./Components/GenerateEpisode/GenerateEpisodeHome";
import GenerateShowHome from "./Components/GenerateShow/GenerateShowHome";
import SimilarShowsHome from './Components/SimilarShows/SimilarShowsHome';
import GenerateEpisode from './Components/GenerateEpisode/GenerateEpisode';
import EpisodeGenerated from './Components/GenerateEpisode/EpisodeGenerated';
import SimilarShowsGenerated from './Components/SimilarShows/SimilarShowsGenerated';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<GenerateEpisodeHome />} />
          <Route path="/generate-show" element={<GenerateShowHome />} />
          <Route path="/similar-shows" element={<SimilarShowsHome />} />

          <Route path="/show/:show" element={<GenerateEpisode />} />
          <Route path="/episode-generated/:show/:season" element={<EpisodeGenerated />} />
          <Route path="/similar-shows/:show" element={<SimilarShowsGenerated />} />

       </Routes>
      <Footer />
    </div>
  );
}

export default App;
