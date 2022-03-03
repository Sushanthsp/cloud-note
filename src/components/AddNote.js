import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/notes/ThemeContext";
import { NoteContext } from "../context/notes/noteContext";

const AddNote = () => {
  const {setMsg,theme} =useContext(ThemeContext)
  const { addNote } = useContext(NoteContext);

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    setMsg("You have Added new note", "success")
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div >
      <h2>Add your notes</h2>

      <form className={`my-3 bg-${theme} text-${theme === 'dark'?'light':'dark'}`}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            required
            minLength={5}
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={onChange}
            value={note.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            style={ {height: "200px", overflowYscroll:"scroll"} } 
            required
            minLength={5}
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
            value={note.description}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            required
            minLength={5}
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onChange}
            value={note.tag}
          />
        </div>
        <button
          disabled={note.title.length < 5 && note.description.length < 5}
          type="submit"
          className="btn btn-primary"
          onClick={handleClick}
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
