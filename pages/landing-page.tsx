// pages/index.tsx

// import ScrollingSection from "../components/Scrollable";
import NavBar from "../components/NavBar";  
import InstaCard from "../components/InstaCard";
import Showreel from "../components/Showreel";
import Gsk from "../components/Gsk";
import RandomLetterSize from "../components/Random";
const Home = () => {
  return (
    <div>
      {/* <h1>Welcome to Next.js Scrolling Sections</h1> */}
      <NavBar leftColor="rgb(255,235,0)" rightColor="rgb(255,235,0)" />
      {/* <ScrollingSection /> */}
      {/* <Showreel />
      <InstaCard />
      <Gsk /> */}
      <RandomLetterSize/>
    </div>
  );
};

export default Home;
