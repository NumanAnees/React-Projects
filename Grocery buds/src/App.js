import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, Setname] = useState("");
  const [list, Setlist] = useState([]);
  const [isEditing, SetIsEditing] = useState(false);
  const [editId, SetEditId] = useState(null);
  const [alert, SetAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      //show alert
      AlertHandle(true, "danger", "Item cannot be empty");
    } else if (name && isEditing) {
      //edit
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      Setlist([...list, newItem]);
      Setname("");
    }
  };
  const AlertHandle = (show = false, type = "", msg = "") => {
    SetAlert({ show, type, msg });
  };
  return (
    <>
      <section className="section-center">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} removeAlert={AlertHandle} />}
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
        {list.length > 0 && (
          <div className="grocery-container">
            <List items={list} />
            <button className="clear-btn">clear items</button>
          </div>
        )}
      </section>
    </>
  );
}

export default App;
