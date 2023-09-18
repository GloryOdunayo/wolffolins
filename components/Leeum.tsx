import React from 'react'

const Leeum = () => {
  return (
    <div>
        <div className="video-container position-relative">
            <video className="video-background" poster="https://wolffolins.b-cdn.net/wolffolins/b8cece1b-b378-4db0-b4f3-aacf9a6613f7_01.jpg?auto=compress,format"  loop autoPlay>
                <source src="https://wolffolins.b-cdn.net/wolffolins/983db052-5191-4c1c-af94-d12f25956820_01.mp4" type="" />
            </video>
            <span className="arrow text-white">
                <div className="home-block--details"><a href="/case-study/gsk" className=""><h3> Leeum</h3>
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

export default Leeum;