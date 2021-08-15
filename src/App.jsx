  
import "./App.css";
import { useState } from "react";
import Card from "./Card";
import calory from "./content";

export default function App() {
  const [data, setData] = useState(Calories);
  return (
    <div className="app">
      <div className="container">
        {data.length ? (data.map(({ calory, food, id }) => (
            <Card
              key={id}
              calory={calory}
              data={data}
              setData={setData}
              food={food}
              id={id}
            />
          ))) : (
          <h1 className="end">No Entry</h1>
        )}
      </div>
    </div>
  );
}