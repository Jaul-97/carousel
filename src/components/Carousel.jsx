// import React from 'react'
import React, {useState} from 'react'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpeg'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


function Carousel() {
    const [index,setIndex]=useState(0);
    let data=[
        {
            id:1,
            url:image1
        },
        {
            id:2,
            url:image2
        },
        {
            id:3,
            url:image3
        },
        {
            id:4,
            url:image4
        },
        {
            id:5,
            url:image5
        }
    ]
   
     let eachImage=[data[index]];

     let prevHandler=()=>{
        if(index <= 0){
            setIndex(data.length)
        }
        setIndex((prev) => prev - 1 );


   }

   let nextHandler = () =>{
    if(index >=data.length-1){
        setIndex(-1)
    }
    setIndex((next) => next+1)

   }
  return (
    <div><h1 className='title'>Image Carousel</h1>
        
        {
        eachImage.map((item) => (
            <img src={item.url} alt='' width={300} height={300}/>
        ))
    }
    <div className='btns'>
        <button onClick={prevHandler}>Prev</button>
        <button onClick={nextHandler}>next</button>
    </div>
    
    <footer className='footer'>
        <div>
            <FaFacebook/>
            <FaInstagramSquare/>
            <p>Note:Facebook and instagram icons do not work.</p>
        </div>

    </footer>

    </div>
  )
}

export default Carousel