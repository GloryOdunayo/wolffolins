import React from 'react'

const Xpeng = () => {
  return (
    <>
        <div className="video-container">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="video-background" srcSet="https://wolffolins.b-cdn.net/wolffolins/69326b55-af12-4681-868b-99ca41e31196_01.png?auto=compress,format&amp;rect=0,0,3000,2002&amp;w=1151&amp;h=768 1151w, https://wolffolins.b-cdn.net/wolffolins/69326b55-af12-4681-868b-99ca41e31196_01.png?auto=compress,format&amp;rect=0,0,3000,2001&amp;w=1349&amp;h=900 1349w, https://wolffolins.b-cdn.net/wolffolins/69326b55-af12-4681-868b-99ca41e31196_01.png?auto=compress,format&amp;rect=0,0,3000,2002&amp;w=2158&amp;h=1440 2158w" loading="lazy" alt="" style={{backgroundSize:'cover', backgroundPosition:'center'}}></img>
        <span className="arrow">
          <svg xmlns="http://www.w3.org/2000/svg" className="arrow"><marker id="marker-345" refX="13" refY="8" viewBox="0 0 6 4"><path d="M9.5,9.1L0,14.5l1,1.7l14.4-8.1L1,0L0,1.7l9.5,5.4V9.1z"></path></marker> <line marker-end="url(#marker-345)" x1="0" y1="50%" x2="93%" y2="50%"></line>
          </svg> 
          <h3 className="sans-25 text-white">XPENG</h3>
        </span>
      </div>
    </>
  )
}

export default Xpeng;