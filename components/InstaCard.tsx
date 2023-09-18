// pages/index.tsx

import ScrollingSection from "../components/Scrollable";
import NavBar from "../components/NavBar";  
const InstaCard = () => {
  return (
    <div>
      {/* <h1>Welcome to Next.js Scrolling Sections</h1> */}
      <NavBar leftColor="rgb(255,235,0)" rightColor="rgb(255,235,0)" />
      <div className="video-container">
        <video className="video-background" poster="https://wolffolins.b-cdn.net/wolffolins/fa9dbaef-d9d3-4ee2-9006-aafc67e3043f_01_Instacart_Loader.jpg?auto=compress,format" loop autoPlay>
            <source src="https://wolffolins.b-cdn.net/wolffolins/54f4312d-4f2b-4b63-ac53-d6b761d0d0ed_05_Instacart_Loader.mp4" type="" />
        </video>
        {/* <h2 className="sans-90">We help create transformative brands that move businesses, people and the world forward</h2> */}
        <span className="arrow">
          <svg xmlns="http://www.w3.org/2000/svg" className="arrow"><marker id="marker-345" refX="13" refY="8" viewBox="0 0 6 4"><path d="M9.5,9.1L0,14.5l1,1.7l14.4-8.1L1,0L0,1.7l9.5,5.4V9.1z"></path></marker> <line marker-end="url(#marker-345)" x1="0" y1="50%" x2="93%" y2="50%"></line>
          </svg> 
          <span className="sans-25">Instacart</span>
        </span>
      </div>
    </div>
  );
};

export default InstaCard;