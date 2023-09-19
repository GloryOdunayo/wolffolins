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

export default Abrdn;