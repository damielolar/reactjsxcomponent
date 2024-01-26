import React from 'react';
import  profilePic from '../component/assets/IMG_2952.JPG'
import './greetings.css'
// greetting
const firstName = "Damilola";

const Greeting = () => {
    return (
        <div className='greetings'>
        <p style={{color:'white', marginLeft:'45%',fontSize:'30px', fontWeight:'light'}}>Hello, {firstName ? firstName : "there"}!</p>
        {/* Display an image if the first name is provided */}
        {firstName && <img style={{width:'70px', marginLeft:'50%', paddingBottom:'0.5%'}} src={ profilePic} alt="profilePhoto" />}
        </div>
    );
}

export default Greeting;