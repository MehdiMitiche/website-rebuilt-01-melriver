import "./App.css";
import { useRef, useState } from "react";
import gsap from "gsap";
import Header from "./Components/Header";
import Services from "./Components/Services";
import Menu from "./Components/Menu";
import menuIcon from "./Assets/menu.png";

function App() {
  let appContent = useRef(null);
  const [opened, setOpened] = useState(false);
  const clickMenu = () => {
    if (opened === true) {
      gsap.to(appContent, { top: "0vh", duration: 1, ease: "expo.inOut" });
      setOpened(false);
    } else {
      gsap.to(appContent, { top: "50vh", duration: 1, ease: "expo.inOut" });
      setOpened(true);
    }
  };
  return (
    <div className="app">
      <div className="logo">AGENCY</div>
      <img
        onClick={() => clickMenu()}
        src={menuIcon}
        alt="menu"
        className="menu-icon"
      />
      <Menu />
      <div ref={(node) => (appContent = node)} className="app-content">
        <Header />
        <Services />
      </div>
    </div>
  );
}

export default App;
