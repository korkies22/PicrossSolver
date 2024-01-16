import ClueInput from "../clueInput/ClueInput";

function Grid({ size }: { size: number }) {
  const grid = [];

  grid.push(null);
  grid.push(...Array(size).fill(<ClueInput vertical />));

  for (let i = 0; i < size; i++) {
    grid.push(<ClueInput />);
    for (let j = 0; j < size; j++) {
      grid.push(null);
    }
  }
  return (
    <div
      className={`mt-5 grid [max-width:600px] grid-cols-${size + 1} mx-10 gap-1 text-center`}
    >
      {grid.map((value, index) => (
        <div className="flex" key={index}>
          {value}
        </div>
      ))}
    </div>
  );
}

export default Grid;
