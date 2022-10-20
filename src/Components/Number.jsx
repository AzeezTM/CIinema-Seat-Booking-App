import React, { useRef } from "react";
import { useState } from "react";

function Number() {
  const [result, setNum] = useState();
  const [show, showMe] = useState(0);

  const handleClick = () => {
    let y = setNum ** 3 / 3 + setNum ** 2 / 2 + setNum / 6;

    y = showMe;
  };

  return (
    <div>
      <h2>{show}</h2>
      <input
        type="number"
        className="
   k form-control mb-2 w-25 mt-10"
        placeholder="Number"
        value={result}
      />
      <button
        type="submit"
        className="btn1 btn btn-success mb-3"
        onClick={handleClick}
      >
        Sum
      </button>
      <br />
    </div>
  );
}

export default Number;
