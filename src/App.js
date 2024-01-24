import { Routes, Route } from 'react-router-dom';

import "./App.css";
import "./Components/Header/Header";

import Header from "./Components/Header/Header";
import Home from './Components/GenerateEpisode/Home';
import SearchResults from './Components/UI/Search/SearchResults';
import ShowDetails from './Components/GenerateEpisode/ShowDetails';
import EpisodeDetails from './Components/GenerateEpisode/EpisodeDetails';
import Popular from './Components/Popular/Popular';
import GenerateShow from './Components/GenerateShow/GenerateShow';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular/>} />
          <Route path="/generate-show" element={<GenerateShow/>} />

          <Route path="/search/:value" element={<SearchResults/>} />
          <Route path="/show/:showId" element={<ShowDetails/>} />
          <Route path="/episode/:showId/:selectedSeason" element={<EpisodeDetails/>} />
       </Routes>
    </div>
  );
}

export default App;
