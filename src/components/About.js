import React,{useContext} from 'react'
import { ThemeContext } from '../context/notes/ThemeContext';

const About = () => {

  const { theme } = useContext(ThemeContext);

    return(
        <div className={`bg-${theme} text-${theme === 'dark'?'light':'dark'}`}>This is About page 
        </div>   
  )
}

export default About;