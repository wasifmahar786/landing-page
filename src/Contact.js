import React,{useState,useEffect} from 'react'
import MyCards from './MyComponen/MyCards'
import axios from 'axios'
function Contact() {


  const [allPlaces, setallPlaces] = useState([]);

  async function getPlaces() {
    let reult = await axios.get(
      "https://testtingwork.store/api/places/getAllPlaces"
    );

    setallPlaces(reult.data.data);
    console.log(reult.data.data);

  }

  // run first when come to this page

  useEffect(() => {
    getPlaces();
    // alert('hellos')
  }, []);

  const politics=[
    {
      id:'1',
    name:'Wali',
    img:"https://img.freepik.com/free-photo/female-hand-typing-keyboard-laptop_1150-15742.jpg?w=740&t=st=1661939513~exp=1661940113~hmac=67b032400c0c02b9e83acc8bfff58dedf08b0fa54b2af17044b7b7004419dca0",
    desc:"abc",
    address:"abc",
   },
   {
id:'2',
name:'Jhonny Sins',
img:'https://i1.sndcdn.com/artworks-05weslCSgT0srZgR-9gUdXg-t500x500.jpg',
desc:'i m wasif ali'


   },
   {
    id:'3',
    name:'qeeqrwr',
    img:'https://i1.sndcdn.com/artworks-05weslCSgT0srZgR-9gUdXg-t500x500.jpg',
    desc:'i m wasif ali'
    
    
       },
    
   
  ]



  
  return (
    <>
    {allPlaces.map((item)=>(
      <MyCards 
      id={item.id}
      name={item.name}
      desc={item.description}
      img={item.pic}
      address={item.address}
      category={item.category[0]}
      atmosphere={item.atmosphere}


      
      />
    ))}
    <
  );
}






export default Contact