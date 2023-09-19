import React from 'react'

const Workspace = () => {
  return (
    <div>
        <div className="video-container position-relative">
        <video className="video-background" loop autoPlay>
            <source src="https://wolffolins.b-cdn.net/wolffolins/81de49a0-252f-4308-85de-c694a7dc4637_01_Google_Workspace_Rotate.mp4" type="" />
        </video>
        {/* <h2 className="sans-90">We help create transformative brands that move businesses, people and the world forward</h2> */}
        <span className="arrow">
            <div className="home-block--details"><a href="/case-study/gsk" className=""><h3> Google Workspace</h3> <p className="serif-18">Unifying Google Workspace for the Future of Work</p> 
            <span className="arrow-link">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="arrow"><marker id="marker-345" refX="13" refY="8" viewBox="0 0 6 4"><path d="M9.5,9.1L0,14.5l1,1.7l14.4-8.1L1,0L0,1.7l9.5,5.4V9.1z"></path></marker> <line marker-end="url(#marker-345)" x1="0" y1="50%" x2="93%" y2="50%"></line>
          </svg>  */}
          </span>
          </a>
          <div className="login">
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </div>
          </div>
        </span>
      </div>
    </div>
  )
}

export default Workspace;