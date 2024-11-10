import './App.css';
import Navbar from './Navbar';
import Body from './Body';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import Experience from './Experience';
import ConnectMe from './ConnectMe';
import Achievements from './Achievements';
import CertificatesSection from './CertificatesSection';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <SkillsSection />
      <Experience />
      <ProjectsSection />
      <Achievements />
      <CertificatesSection />
      <ConnectMe />
    </div>
  );
}

export default App;
