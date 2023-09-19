import React from 'react'

const Economist = () => {
  return (
    <div>
        <div className="video-container position-relative">
            <video className="video-background" loop autoPlay>
                <source src="https://wolffolins.b-cdn.net/wolffolins/c26fdaaf-b855-417d-acbe-e26e2e134be0_TEG_CS-01+2.mp4" type="" />
            </video>
            <span className="arrow text-white">
                <div className="home-block--details"><a href="/case-study/gsk" className=""><h3> The Economist Group</h3>
                <span className="arrow-link">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="arrow"><marker id="marker-345" refX="13" refY="8" viewBox="0 0 6 4"><path d="M9.5,9.1L0,14.5l1,1.7l14.4-8.1L1,0L0,1.7l9.5,5.4V9.1z"></path></marker> <line marker-end="url(#marker-345)" x1="0" y1="50%" x2="93%" y2="50%"></line>
                </svg>  */}
                </span>
                </a>
                </div>
                <div className="login">
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </div>
            </span>
        </div>
    </div>
  )
}

export default Economist;