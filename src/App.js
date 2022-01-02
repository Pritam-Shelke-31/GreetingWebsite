import React from "react";

function App() {
  let currDate = new Date(2021, 5, 5, 20);
  currDate = currDate.getHours();
  let greetings = "";
  const cssStyling = {};
  if (currDate >= 1 && currDate <= 12) {
    greetings = "Good Morning";
    cssStyling.color = "Green";
  } else if (currDate >= 13 && currDate <= 20) {
    greetings = "Good Afternoon";
    cssStyling.color = "Orange";
  } else if (currDate >= 21 && currDate <= 23) {
    greetings = "Good Night";
    cssStyling.color = "Black";
  }

  return (
    <>
      <div>
        <h1>
          Hello sir ,<span style={cssStyling}> {greetings} </span>
        </h1>
      </div>
    </>
  );
}

export default App;
