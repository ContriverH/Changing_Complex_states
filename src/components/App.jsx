import React, { useState } from "react";

function App() {
  const [userName, setFullName] = useState("");

  const [fullName, setName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "fName") {
      setName((prevName) => {
        return { fName: value, lName: prevName.lName };
      });
    } else if (name === "lName") {
      setName((prevName) => {
        return {
          fName: prevName.fName,
          lName: value
        };
      });
    }
  }

  function handleClick(event) {
    setFullName(fullName.fName + " " + fullName.lName);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {userName}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
