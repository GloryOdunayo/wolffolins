import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import Showreel from '../components/Showreel'
import InstaCard from '../components/InstaCard'
import Gsk from '../components/Gsk'
import Xpeng from '../components/Xpeng'
import Workspace from '../components/Workspace'
import Tiktok from '../components/Tiktok'
import Uber from '../components/Uber'
import McKinsey from '../components/McKinsey'
import Economist from '../components/Economist'
import DailyPay from '../components/DailyPay'
import Abrdn from '../components/Abrdn'
import TheMet from '../components/TheMet'
import Sage from '../components/Sage'
import Leeum from '../components/Leeum'
import Footer from '../components/Footer'
import { changeNavbarColor } from '../utils/changeNavbarColor'
import React from 'react'
import { Waypoint } from 'react-waypoint';

const Home: NextPage = () => {
  const [activeComponent, setActiveComponent] = React.useState<string>('Showreel');
  const [textColor, setTextColor] = React.useState<string>('black');
  const handleWaypointEnter = (componentName: string) => {
    setActiveComponent(componentName);
  };
  const updateTextColor = (componentName: string) => {
    if (componentName === 'Showreel') {
      return 'white';
    } else if (componentName === 'InstaCard') {
      return 'black';
    } else if (componentName === 'Gsk') {
      return 'black';
    } else if (componentName === 'Xpeng') {
      return 'white';
    } else if (componentName === 'Workspace') {
      return 'black';
    } else if (componentName === 'Tiktok') {
      return 'white';
    } else if (componentName === 'Uber') {
      return 'white';
    } else if (componentName === 'McKinsey') {
      return 'white';
    } else if (componentName === 'Economist') {
      return 'black';
    } else if (componentName === 'DailyPay') {
      return 'black';
    } else if (componentName === 'Abrdn') {
      return 'white';
    } else if (componentName === 'TheMet') {
      return 'black';
    } else if (componentName === 'Sage') {
      return 'white';
    } else if (componentName === 'Leeum') {
      return 'white';
    }
    return 'white';
  };
  React.useEffect(() => {
    const handleScroll = () => {
      const updatedTextColor = updateTextColor(activeComponent);
      setTextColor(updatedTextColor);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeComponent]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Wolffolins</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <NavBar leftColor="black" rightColor="rgb(255,235,0)" activeComponent={activeComponent} textColor={textColor} />
      {/* <ScrollingSection /> */}
        <Waypoint onEnter={() => handleWaypointEnter('Showreel')} topOffset="100%" bottomOffset="100%">
          <div className="">
            <Showreel />
          </div>
        </Waypoint>
        <Waypoint onEnter={() => handleWaypointEnter('InstaCard')} topOffset="100%" bottomOffset="100%">
          <div className="">
            <InstaCard />
          </div>
        </Waypoint>
        {/* <InstaCard /> */}
        <Waypoint onEnter={() => handleWaypointEnter('Gsk')} topOffset="100%" bottomOffset="100%">
          <div className="">
            <Gsk />
          </div>
        </Waypoint>
        <Waypoint onEnter={() => handleWaypointEnter('Xpeng')} topOffset="100%" bottomOffset="100%">
          <div className="">
            <Xpeng />
          </div>
        </Waypoint>
        <Waypoint onEnter={() => handleWaypointEnter('Workspace')} topOffset="10%" bottomOffset="100%">
          <div className="">
            <Workspace />
          </div>
        </Waypoint>
        <Waypoint onEnter={() => handleWaypointEnter('Tiktok')} topOffset="30%" bottomOffset="100%">
          <div className="">
            <Tiktok />
          </div>
        </Waypoint>
        <Waypoint onEnter={() => handleWaypointEnter('Uber')} topOffset="30%" bottomOffset="100%">
          <div className="">
            <Uber />
          </div>
        </Waypoint>
        <Waypoint onEnter={() => handleWaypointEnter('McKinsey')} topOffset="30%" bottomOffset="100%">
          <div className="">
            <McKinsey/>
          </div>
        </Waypoint>
        <Waypoint onEnter={() => handleWaypointEnter('Economist')} topOffset="30%" bottomOffset="100%">
          <div className="">
            <Economist/>
          </div>
        </Waypoint>
        <Waypoint onEnter={() => handleWaypointEnter('DailyPay')} topOffset="30%" bottomOffset="1%">
          <div className="">
            <DailyPay/>
          </div>
        </Waypoint>
        <Waypoint onEnter={() => handleWaypointEnter('Abrdn')} topOffset="30%" bottomOffset="1%">
          <div className="">
            <Abrdn/>
          </div>
        </Waypoint>
        <Waypoint onEnter={() => handleWaypointEnter('TheMet')} topOffset="30%" bottomOffset="1%">
          <div className="">
            <TheMet/>
          </div>
        </Waypoint>
        <Waypoint onEnter={() => handleWaypointEnter('Sage')} topOffset="30%" bottomOffset="1%">
          <div className="">
            <Sage/>
          </div>
        </Waypoint>
        <Waypoint onEnter={() => handleWaypointEnter('Leeum')} topOffset="30%" bottomOffset="1%">
          <div className="">
            <Leeum/>
          </div>
        </Waypoint>
        <Waypoint onEnter={() => handleWaypointEnter('')} topOffset="30%" bottomOffset="1%">
          <div className="" style={{height:'', backgroundColor:'black'}}>
            <div className="py-5 px-4">
              <span className="text-white">
                <div className=""><a href="" className=""><h3>Let&apos;s talk about you</h3>
                  <p className="serif-18"><i className="fa fa-arrow-right" aria-hidden="true"></i> <span className="text">Get in touch</span></p>
                  </a>
                </div>
              </span>
            </div>
          </div>
        </Waypoint>
        <Footer/>
      </main>
    </div>
  )
}

export default Home
