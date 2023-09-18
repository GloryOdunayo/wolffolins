import React from 'react'

const Tiktok = () => {
  return (
    <div>
        <div className="video-container position-relative">
            <video className="video-background" poster="https://wolffolins.b-cdn.net/wolffolins/cb1d903c-196a-4f50-a3e4-6e38ea6c1aab_TikTok_explainer_texture_03_Poster.png?auto=compress,format"  loop autoPlay>
                <source src="https://wolffolins.b-cdn.net/wolffolins/3da68a4f-a138-4a92-be09-624ddf235d3f_TikTok_explainer_texture_03_1.mp4" type="" />
            </video>
        {/* <h2 className="sans-90">We help create transformative brands that move businesses, people and the world forward</h2> */}
        <span className="arrow text-white">
            <div className="home-block--details"><a href="/case-study/gsk" className=""><h3> Tiktok</h3>
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

export default Tiktok;