import { useState } from "react";
import Grid from "./components/grid/Grid";

function App() {
  const [size, setSize] = useState(5);
  return (
    <section className="flex flex-col items-center">
      <h1 className="mt-10 text-5xl text-teal-100">picross solver</h1>
      <label className="mt-5 block ">
        <span className="mr-4">Size of grid (x by x)</span>
        <input
          type="number"
          className="w-12 pl-2 pr-0 text-stone-800"
          value={size}
          min="0"
          onInput={(e) => setSize(+(e.target as HTMLInputElement).value)}
        />
      </label>

      {size > 0 && <Grid size={size} />}
    </section>
  );
}

export default App;
