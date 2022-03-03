import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NoteContext } from "../context/notes/noteContext";

const Noteitem = (props) => {
  const { note, updateNote } = props;
  const { deleteNote,setMsg } = useContext(NoteContext);
  return (
    <div className="col-lg-4" >
      <div className="card my-2"  >
        <div className="card-body bg-dark text-light" style={{"maxHeight":"350px", "overflow": "scroll"}}>
          <div className="d-flex justify-content-start align-items-baseline">
            <h5 className="card-title">{note.title}</h5>
            <i
              className="fa-solid fa-circle-minus mx-2"
              onClick={() => {
                deleteNote(note._id);
                setMsg("Deleted note successfullly", "success");
              }}
            ></i>
            <i
              className="fa-regular fa-pen-to-square mx-2"
              onClick={() => updateNote(note)}
            ></i>
          </div>
          <p className="card-text">{note.description}</p>
          <Link to="#" className="btn btn-primary">
            Go somewhere
          </Link>
         </div>
      </div>
    </div>
  );
};

export default Noteitem;
