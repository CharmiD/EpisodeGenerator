import "./App.css";
import "./components/Header/Header";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import GenerateEpisodeHome from "./components/GenerateEpisode/GenerateEpisodeHome";

function App() {
  return (
    <div className="App">
      <Header />
      <GenerateEpisodeHome />
      <Footer />
    </div>
  );
}

export default App;
