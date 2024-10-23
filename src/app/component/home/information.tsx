'use client'
import { useEffect, useState } from 'react';
import homeStyle from './homeStylle.module.css';
const Information = () => {

    const [isVisible, setIsVisible] = useState (false)
    useEffect (() =>{
        setIsVisible(true);
    }, []);
 const TextMSG: string = "Welcome"

  return (
   <div>
    <div className={ `${homeStyle.text} ${isVisible ? homeStyle.visible: ''}`}>
       <div className={homeStyle.waveText}>
        {
            TextMSG.split(" ").map((char, index)=>(
                <span key={index} style={{"--i": index}}>{char}</span>
            ))
        }
       </div>
    </div>
   </div>
  )
}

export default Information