import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import CompA from "./CompA.jsx";
import CompC from "./CompC";
import Jam from "./Jam";

const UserContext = createContext();
const UnamelastContext = createContext();

function App() {
  const company = "devtown";
  const city = "jakarta";
  const date = new Date().toDateString();
  // toLocateString();
  // toDateString();
  // toLocateTimeString(); time only

  const [number, setNumber] = useState(0);
  const [increment, setIncrement] = useState(false);
  const [decrement, setDecrement] = useState(false);

  useEffect(() => {
    {
      number === 0 ? setDecrement(true) : setDecrement(false);
    }
    {
      number === 10 ? setIncrement(true) : setIncrement(false);
    }
  }, [number]);

  //day 5
  const [items, setitems] = useState([
    { id: 0, name: "alvin", lastname: "alfanzano" },
    { id: 2, name: "ronal", lastname: "rifaldi" },
    { id: 3, name: "ziva", lastname: "magnolia" },
    { id: 4, name: "mayasta", lastname: "dyah" }
  ]);

  return (
    <>
      {
        //react fragment <React.Fragment> = using this you can remove re render of div
        //strict mode = will remove extra code function when you need to bundling the code into single file
      }

      <h1>
        {`Hello World, my name is Alvin learing React on ${company}, its situated  at ${city} on `}{" "}
        {date}
      </h1>

      <br />

      <button
        disabled={increment}
        onClick={() => {
          setNumber(number + 1);
        }}
        className="increment"
      >
        +
      </button>
      <div style={{ fontSize: "40px" }}>{number}</div>
      <button
        style={{ fontSize: "40px" }}
        disabled={decrement}
        onClick={() => {
          setNumber(number - 1);
        }}
        className="decrement"
      >
        -
      </button>

      <h1>List of Student</h1>

      {items.map((element) => {
        return (
          <div key={element.id}>
            {element.id % 2 == 0 ? (
              <>
                <span className="name">{element.name}</span>
                <span className="name">{element.lastname}</span>
              </>
            ) : (
              <></>
            )}
          </div>
        );
      })}
      <br />

      <CompA user={{ name: "alvin", lastname: "alfanzano" }} age={25} />

      <UserContext.Provider value={"Ziva"}>
        <UnamelastContext.Provider value={"Magnolya"}>
          <CompC />
        </UnamelastContext.Provider>
      </UserContext.Provider>

      {
        //context ipa = to pass value ke beberapa component as hirarki
        //Provider i want to pass something from app.jsx to comp c
        //Consumber data will be consume by comp c
        //CreateContext around provider and costumer
      }
      <Jam />
    </>
  );
}

export default App;
export { UserContext, UnamelastContext };
