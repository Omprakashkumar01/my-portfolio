import './App.css';
import Navbar from './Navbar';
import Body from './Body';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import Experience from './Experience';
import ConnectMe from './ConnectMe';
import Achievements from './Achievements';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <SkillsSection />
      <Experience />
      <ProjectsSection />
      <Achievements />
      <ConnectMe />
    </div>
  );
}

export default App;
