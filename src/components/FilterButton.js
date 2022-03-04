import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { BlogContext } from "../context/notes/BlogContext";

export const FilterButton = (props) => {
    
    const {note} = props
    const { fil } = useContext(BlogContext);
    
    return (
        
      <li className="nav-item active col">
        <Link
        type="button" className="nav-item mx-2 my-2 btn btn-primary" to="#" onClick={() => fil(note.tag)}>{note.tag}</Link>
             </li>
    
  )
}

 