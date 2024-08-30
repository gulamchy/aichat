import React, { useState } from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';


const Homepage = () => {
    const [typingStatus, settypingStatus] = useState("human1");

  return (
    <div className="homepage">
        <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>AiChat</h1>
        <h2>Supercharge your creativity and productibity</h2>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, et nesciunt! Mollitia, voluptatem vitae fuga quaerat repudiandae.</h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
            <div className="bgContainer">
                <div className="bg">
                
                </div>
            </div>
            <img src="/bot.png" alt="" className="bot" />
            <div className="chat">
                <img src={
                    typingStatus === "human1"
                    ? "/human1.jpeg"
                    : typingStatus === "human2" 
                    ? "/human2.jpeg" 
                    : "/bot.png" 
                    } 
                    alt="" 
                />
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Human: We produce food for Mice',
                        2000, () =>{
                            settypingStatus("bot")
                        },
                        'Bot: We produce food for Hamsters',
                        2000,() =>{
                            settypingStatus("human2")
                        },
                        'Human: We produce food for Guinea Pigs',
                        2000,() =>{
                            settypingStatus("bot")
                        },
                        'Bot: We produce food for Chinchillas',
                        2000,() =>{
                            settypingStatus("human1")
                        },
                    ]}
                    wrapper="span" 
                    repeat={Infinity}
                    cursor={true}
                    omitDeletionAnimation={true}
                />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
