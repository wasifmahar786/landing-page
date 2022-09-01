import React from 'react'

function MyCards(props) {
  return (
  <><div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <div id="container">	
    <div className="product-details">
      <h1>{props.name}</h1>
      <span className="hint-star star">
      <i class="fa fa-bath" aria-hidden="true"></i>
      <i class="fa fa-bath" aria-hidden="true"></i>
      <i class="fa fa-bath" aria-hidden="true"></i>
      <i class="fa fa-bath" aria-hidden="true"></i>
      <i class="fa fa-bath" aria-hidden="true"></i>
    
      </span>
      <p className="information">{props.desc}</p>
      <div className="control">
        <button className="btn">
          <span className="price">{props.para}</span>
          <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true" /></span>
          <span className="buy">Get now</span>
        </button>
      </div>
    </div>
    <div className="product-image">
      <img src={'https://testtingwork.store/readfiles/'+props.img} />
      <div className="info">
        <h2> Description</h2>
        <ul>
          <li><strong>Height : </strong>{props.address} </li>
          <li><strong>Shade : </strong>{props.category}</li>
          <li><strong>Decoration: </strong>{props.atmosphere}</li>
          <li><strong>Material: </strong>Eco-Friendly</li>
        </ul>
      </div>
    </div>
  </div>
</div>

  
  
  
  
  
  
  </>
  )
}

export default MyCards