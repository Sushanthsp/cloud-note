import React from "react";
import { Link } from "react-router-dom";

const BlogItem = (props) => {
  const { note } = props;
    return (  
      
    <div className="col">
      <div className="card  my-2">
        <div className="card-body bg-dark text-light">
          <div className="d-flex justify-content-start align-items-baseline">
            <h5 className="card-title">{note.title}</h5>
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

export default BlogItem;
