import React from 'react'

const TheMet = () => {
  return (
    <div>
        <div className="video-container position-relative">
            <video className="video-background" poster="https://wolffolins.b-cdn.net/wolffolins/NGJkMDk0NmEtM2I1ZS00OGE5LThlODEtOGExNTBkOGZkYjZj_the_met_hero_02.jpg?auto=compress,format"  loop autoPlay>
                <source src="https://wolffolins.b-cdn.net/wolffolins%2Fec3f0b61-f57c-4eda-af87-69b81cae438f_opt_casestudy_themet_lead.mp4" type="" />
            </video>
            <span className="arrow text-white">
                <div className="home-block--details"><a href="/case-study/gsk" className=""><h3> The Met</h3>
                <p className="serif-18">Putting arts and culture in everyone&apos;s hand</p>
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

export default TheMet;