import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuitems, setMenuItems] = useState(items);
  const [tags, setTags] = useState([]);
  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>hey</h2>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
