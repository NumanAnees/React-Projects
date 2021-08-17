import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, Setname] = useState("");
  const [list, Setlist] = useState([]);
  const [isEditing, SetIsEditing] = useState(false);
  const [editId, SetEditId] = useState(null);
  const [alert, SetAlert] = useState({ show: false, msg: "", type: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };
  return (
    <>
      <section className="section-center">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && <Alert />}
          <h3>Grocery Items</h3>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="Enter any item...."
              value={name}
              onChange={(e) => {
                Setname(e.target.value);
              }}
            />
            <button type="submit" className="submit-btn">
              {isEditing ? "Edit" : "Submit"}
            </button>
          </div>
        </form>
        <div className="grocery-container">
          <List />
          <button className="clear-btn">clear items</button>
        </div>
      </section>
    </>
  );
}

export default App;
