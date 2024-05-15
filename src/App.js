import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Works from "./components/Works";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Skills />
      <WorkExperience />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
