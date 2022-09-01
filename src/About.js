import React from 'react'
import Aboutcards from './Aboutcards'

function About() {
  const About=[
{
  name:" I m Wasif Ali. I live in Sargodha. I read in University of Lahore.",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum fugit quia mollitia beatae ut. At voluptate pariatur cum reprehenderit maiores doloremque eius eum quo, distinctio rem culpa modi inventore enim?",
img:"https://img.freepik.com/free-vector/celebrating-pakistan-independence-day-with-typography_1142-4392.jpg?size=338&ext=jpg&ga=GA1.2.1586505479.1659783483",
}





  ]
  return (
    <>
 {About.map((item)=>(
   <Aboutcards
   
      name={item.name}
      desc={item.desc}
      img={item.img}
      
      


      
      />
    ))}
    </>
  );
}

export default About