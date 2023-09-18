import React from 'react'

const DailyPay = () => {
  return (
    <div>
        <div className="video-container position-relative">
            <video className="video-background" poster="https://wolffolins.b-cdn.net/wolffolins/276e42a2-56c8-444b-9dd0-596d8abed788_00-DailyPay-Logo.jpg?auto=compress,format"  loop autoPlay>
                <source src="https://wolffolins.b-cdn.net/wolffolins/c35d8df4-f520-443b-b314-1d41d4092d79_DailyPay-Header.mp4" type="" />
            </video>
            <span className="arrow">
                <div className="home-block--details"><a href="/case-study/gsk" className=""><h3> DailyPay</h3>
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

export default DailyPay;