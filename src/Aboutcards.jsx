import React from 'react'

function Aboutcards(props) {
  return (
   <>
   <div className="section">
 
 <div className="sec-right">
 <div className="log"><img src={props.img} alt="" /></div></div>

<div className="sec-left">

 <h3>
{props.name}
</h3>
</div>
<div className="paras">
 <p>{props.desc}</p>
</div>
</div>
   
   
   
   
   
   
   
   
   
   
   </>
  )
}

export default Aboutcards