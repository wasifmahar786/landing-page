import React from 'react'

function MyCards(props) {
  return (
<>
<ul class="cards">
  <li>
    <a href="" class="card">
      <img src={props.imgk} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src={props.imgk2} alt="" />
          <div class="card__header-text">
            <h3 class="card__title">{props.namek}</h3>            
            <span class="card__status">{props.desck}</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>      
  </li>
  <li>
    <a href="" class="card">
      <img src={props.imgn} class="card__image" alt="" />
      <div class="card__overlay">        
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img class="card__thumb" src={props.imgn2} alt="" />
          <div class="card__header-text">
            <h3 class="card__title">{props.namen}</h3>
            <span class="card__status">{props.descn}</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
  <li>
    <a href="" class="card">
      <img src={props.img2} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src={props.img} alt="" />
          <div class="card__header-text">
            <h3 class="card__title">{props.desc}</h3>
            <span class="card__tagline">{props.name}</span>            
           
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
  <li>
    <a href="" class="card">
      <img src={props.imgs} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img class="card__thumb" src={props.imgs2}alt="" />
          <div class="card__header-text">
            <h3 class="card__title">{props.names}</h3>
            <span class="card__status">{props.descs}</span>
          </div>          
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>  
  <li>
    <a href="" class="card">
      <img src={props.imgz} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns={props.imgz2}><path /></svg>                 
          <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">{props.namez}</h3>
            <span class="card__status">{props.descz}</span>
          </div>          
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>    
  <li>
    <a href="" class="card">
      <img src={props.imgd} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns={props.imgd2}><path /></svg>                 
          <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">{props.named}</h3>
            <span class="card__status">{props.descd}</span>
          </div>          
        </div>
        <p class="card__description">{props.desc}</p>
      </div>
    </a>
  </li>    












</ul>











</>
  )
}

export default MyCards