import './App.css';
import Navbar from './Navbar';
import Body from './Body';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import Experience from './Experience';
import ConnectMe from './ConnectMe';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <SkillsSection />
      <Experience />
      <ProjectsSection />
      <ConnectMe />
    </div>
  );
}

export default App;
