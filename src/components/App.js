import About from "@components/About";
import Contact from "@components/Contact";
import Home from "@components/Home";
import Skills from "@components/Skills";
import Works from "@components/Works";


function App() {
  return (
    <div className="w-full">
      <Home/>
      <About/>
      <Skills/>
      <Works/>
      <Contact/>
    </div>
  );
}

export default App;
