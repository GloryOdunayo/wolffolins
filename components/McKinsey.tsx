import React from 'react'

const McKinsey = () => {
  return (
    <div>
        <div className="video-container position-relative">
        <video className="video-background" poster="https://wolffolins.b-cdn.net/wolffolins%2Fe421b02f-c5f2-456b-87ca-d7456ff4e7e4_mckinsey_cs_image_lead.jpg?auto=compress,format"  loop autoPlay>
            <source src="https://wolffolins.b-cdn.net/wolffolins%2F8ec5e816-c5c6-4cdb-8704-d06b98bcfd00_opt_mckinsey_lead.mp4" type="" />
        </video>
        <span className="arrow text-white">
            <div className="home-block--details"><a href="/case-study/gsk" className=""><h3> McKinsey & Company</h3> <p className="serif-18">Creating real change</p> 
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

export default McKinsey;