import React from 'react'

function Home() {
  return (
   <>
<div>
  

  <header id="nav-wrapper">
    <nav id="nav">
      <div className="nav left">
        <span className="gradient skew"><h1 className="logo un-skew"><a href="#home">Logo Here</a></h1></span>
        <button id="menu" className="btn-nav"><span className="fas fa-bars" /></button>
      </div>
      <div className="nav right">
        <a href="/" className="nav-link active"><span className="nav-link-span"><span className="u-nav">Home</span></span></a>
        <a href="/About" className="nav-link"><span className="nav-link-span"><span className="u-nav">About</span></span></a>
        <a href="/Work" className="nav-link"><span className="nav-link-span"><span className="u-nav">Work</span></span></a>
        <a href="/Contact" className="nav-link"><span className="nav-link-span"><span className="u-nav">Contact</span></span></a>
      </div>
    </nav>
  </header>
  <div className="Background">
    
    <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/9EF1/production/_124098604_khan.png" alt="" />
  </div>
</div>



   
   
   
   
   </>
  )
}

export default Home