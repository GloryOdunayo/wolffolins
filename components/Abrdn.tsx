import React from 'react'

const Abrdn = () => {
  return (
    <div>
        <div className="video-container position-relative">
            <video className="video-background" poster="https://wolffolins.b-cdn.net/wolffolins/a6872cc0-d2e6-4a84-a554-80c5d60ed04a_Abrdn_CS_00_01.jpg?auto=compress,format"  loop autoPlay>
                <source src="https://wolffolins.b-cdn.net/wolffolins/83e02d07-377b-4d39-8c23-1066fb395082_Abrdn_CS_Website_00+%28Stitched+Clip%29.mp4" type="" />
            </video>
            <span className="arrow text-white">
                <div className="home-block--details"><a href="/case-study/gsk" className=""><h3> abrdn</h3>
                <span className="arrow-link">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="arrow"><marker id="marker-345" refX="13" refY="8" viewBox="0 0 6 4"><path d="M9.5,9.1L0,14.5l1,1.7l14.4-8.1L1,0L0,1.7l9.5,5.4V9.1z"></path></marker> <line marker-end="url(#marker-345)" x1="0" y1="50%" x2="93%" y2="50%"></line>
                </svg>  */}
                </span>
                </a>
                </div>
            </span>
        </div>
    </div>
  )
}

export default Abrdn;