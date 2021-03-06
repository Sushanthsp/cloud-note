import React, { useContext, useEffect, useRef, useState } from "react";
import { NoteContext } from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/notes/ThemeContext";

const Notes = () => {
  const  { notes, getNotes, editNote }  = useContext(NoteContext);
  const { setMsg} = useContext(ThemeContext)
  let navigate = useNavigate();
  
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "default",
  });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    })
  };

  const handleClick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    setNote({ etitle: "", edescription: "", etag: "" });
    setMsg("updated note", "success")
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
    
  };

  return (
    <>
      <AddNote />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Edit note
      </button>

      <div
        className={`modal fade`}
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className={`modal-dialog`}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    required
                    minLength={5}
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    aria-describedby="emailHelp"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    required
                    minLength={5}
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Description
                  </label>
                  <input
                    required
                    minLength={5}
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                ref={refClose}
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
                disabled={
                  note.etitle.length < 5 && note.edescription.length < 5
                }
              >
                Updatenote
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2>Your notes</h2>
      <div className="row">
        {notes.map((notes) => {
          return (
            <Noteitem key={notes._id} updateNote={updateNote} note={notes} />
          );
        })}
      </div>
      <div>{notes.length === 0 && "No notes to display"}</div>
    </>
  );
};
export default Notes;
