import React,{useContext} from "react";
import Notes from "./notes";
import { ThemeContext } from "../context/notes/ThemeContext";

export const Home = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={`bg-${theme} text-${theme === 'dark'?'light':'dark'}`}>
      <div className={`container my-3`}>
      <Notes />
    </div>
    </div>
    
  );
};
