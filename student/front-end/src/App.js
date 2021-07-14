import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import StudentAdded from "./components/StudentAdded";

function App() {
  const [studentAdded, setStudentAdded] = useState("");

  return (
    <BrowserRouter>
      <div className="container">
        <h1>Students</h1>

        <Switch>
          <Route exact path="/">
            <div className="row">
              <StudentList />
              <AddStudent
                changeStudentAdded={(name) => setStudentAdded(name)}
              />
            </div>
          </Route>

          <Route exact path="/studentAdded/">
            <StudentAdded name={studentAdded} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
