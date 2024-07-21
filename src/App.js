import "./App.css";
import Header from "./components/Header";
import Mainbody from "./components/Mainbody";
import bgVideo from "./assets/background.mp4";
import Sidenavbar from './components/Sidenavbar';
import { useContext } from 'react';
import { DataContext } from './data-store/Datacontextapi';
function App() {
  const {sidebar} = useContext(DataContext);
  const {currentpage} = useContext(DataContext);
  return (
    <div className="relative h-screen">
      {
        currentpage === "Home" || currentpage === "Logout" ? <video
        className="absolute top-0 left-0 w-full h-full object-cover "
        src={bgVideo}
        autoPlay
        loop
        muted
      ></video> : null

      }
      <div class="relative z-10">
        <Header/>
        { sidebar ? <Sidenavbar /> : null}
        <Mainbody />
      </div>
      
    </div>
  );
}

export default App;
