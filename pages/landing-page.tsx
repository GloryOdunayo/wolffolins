// pages/index.tsx

import ScrollingSection from "../components/Scrollable";
import NavBar from "../components/NavBar";  
const Home = () => {
  return (
    <div>
      {/* <h1>Welcome to Next.js Scrolling Sections</h1> */}
      <NavBar leftColor="rgb(255,235,0)" rightColor="rgb(255,235,0)" />
      {/* <ScrollingSection /> */}
      <div style={{backgroundColor:"rgb(255,235,0)"}}>
        <h2 className="sans-90">We help create transformative brands that move businesses, people and the world forward</h2>
        <span className="arrow">
          <svg xmlns="http://www.w3.org/2000/svg" className="arrow"><marker id="marker-345" refX="13" refY="8" viewBox="0 0 6 4"><path d="M9.5,9.1L0,14.5l1,1.7l14.4-8.1L1,0L0,1.7l9.5,5.4V9.1z"></path></marker> <line marker-end="url(#marker-345)" x1="0" y1="50%" x2="93%" y2="50%"></line>
          </svg> 
          <span className="sans-25">Play showreel</span>
        </span>
      </div>
    </div>
  );
};

export default Home;
