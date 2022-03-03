import React,{useContext} from 'react'
import Blog from './Blog'
import { ThemeContext } from "../context/notes/ThemeContext";


export const BlogHome = () => {
    const { theme} = useContext(ThemeContext)

  return (
      <div className={`bg-${theme} text-${theme === 'dark'?'light':'dark'}`}>
          <Blog/> 
    </div>
  )
}
