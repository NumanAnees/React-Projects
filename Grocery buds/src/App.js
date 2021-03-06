import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};
function App() {
  const [name, Setname] = useState("");
  const [list, Setlist] = useState(getLocalStorage());
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
      Setlist(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      Setname("");
      SetEditId(null);
      SetIsEditing(false);
      AlertHandle(true, "success", "value changed");
    } else {
      AlertHandle(true, "success", "Item added to the list");
      const newItem = { id: new Date().getTime().toString(), title: name };
      Setlist([...list, newItem]);
      Setname("");
    }
  };
  const AlertHandle = (show = false, type = "", msg = "") => {
    SetAlert({ show, type, msg });
  };
  const clearHandle = () => {
    AlertHandle(true, "danger", "empty list");
    Setlist([]);
  };
  const removeHandle = (id) => {
    AlertHandle(true, "danger", "Item Removed");

    Setlist(
      list.filter((item) => {
        return item.id !== id;
      })
    );
  };
  const editHandle = (id) => {
    const SpecificItem = list.find((item) => {
      return item.id === id;
    });
    SetIsEditing(true);
    SetEditId(id);
    Setname(SpecificItem.title);
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <>
      <section className="section-center">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && (
            <Alert {...alert} removeAlert={AlertHandle} list={list} />
          )}
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
            <List
              items={list}
              removeHandle={removeHandle}
              editHandle={editHandle}
            />
            <button className="clear-btn" onClick={clearHandle}>
              clear items
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default App;
