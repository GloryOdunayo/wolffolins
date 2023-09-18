import React from 'react'

const Gsk = () => {
  return (
    <>
        <div className="video-container">
            <video className="video-background" poster="https://wolffolins.b-cdn.net/wolffolins/7301b805-95df-4683-8410-417da7e53a9a_01.jpg?auto=compress,format" loop autoPlay>
                <source src="https://wolffolins.b-cdn.net/wolffolins/4528f2df-1013-4a8a-a312-4a29c04ec87d_GSK_HERO_Ba2.mp4" type="" />
            </video>
            {/* <span className="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" className="arrow"><marker id="marker-345" refX="13" refY="8" viewBox="0 0 6 4"><path d="M9.5,9.1L0,14.5l1,1.7l14.4-8.1L1,0L0,1.7l9.5,5.4V9.1z"></path></marker> <line marker-end="url(#marker-345)" x1="0" y1="50%" x2="93%" y2="50%"></line>
                </svg> 
                <span className="sans-25">Instacart</span>
            </span> */}
            {/* <p className="serif-18">GSK: A brand that brings science and tech to life</p> */}
            <div className="home-block--details arrow"><a href="/case-study/gsk" className=""><h3>GSK </h3> <p className="serif-18">GSK: A brand that brings science and tech to life</p> <span className="arrow-link"><svg xmlns="http://www.w3.org/2000/svg" className="arrow"><marker id="marker-318" refX="13" refY="8" viewBox="0 0 6 4"><path d="M9.5,9.1L0,14.5l1,1.7l14.4-8.1L1,0L0,1.7l9.5,5.4V9.1z"></path></marker> <line marker-end="url(#marker-318)" x1="0" y1="50%" x2="93%" y2="50%"></line></svg> <span className="sans-25"></span></span></a></div>
        </div>
    </>
  )
}

export default Gsk;