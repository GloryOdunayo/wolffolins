import React from 'react'

const Showreel = () => {
  return (
    <>
        <div style={{backgroundColor:"rgb(255,235,0)", height: '100vh'}} className='video-containe my-auto'>
          <div className="d-flex justify-content-center align-items-center sans-90 h-100">We help create transformative brands that move businesses, people and the world forward
            {/* <h2 className="sans-90"></h2> */}
          </div>
          <span className="arrow"> 
            <div className="serif-18">
              <i className="fa fa-arrow-right" aria-hidden="true"></i> <span className="text">
                Play showreel
              </span>
              {/* <h3 className="sans-25">Play showreel</h3> */}
            </div>
          </span>
      </div>
    </>
  )
}

export default Showreel;