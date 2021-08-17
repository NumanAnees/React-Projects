import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, Setname] = useState("");
  const [list, Setlist] = useState([]);
  const [isEditing, SetIsEditing] = useState(false);
  const [editId, SetEditId] = useState(null);
  const [alert, SetAlert] = useState({ show: false, msg: "", type: "" });
  return <h2>grocery bud setup</h2>;
}

export default App;
