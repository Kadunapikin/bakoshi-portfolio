import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Works from "./components/Works";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Skills />
      <Works />
    </div>
  );
}

export default App;
