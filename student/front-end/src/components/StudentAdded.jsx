import { Link } from "react-router-dom";

import React from "react";

const StudentAdded = ({ name }) => {
  return (
    <div className="row">
      <div className="col-12">
        <h4>
          Student {name} has been added. <Link to="/">Go back</Link>
        </h4>
      </div>
    </div>
  );
};

export default StudentAdded;
