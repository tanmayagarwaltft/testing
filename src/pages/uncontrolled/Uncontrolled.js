import React, { useRef } from "react";

const Uncontrolled = () => {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <div>Uncontrolled</div>
      <input
        type="text"
        placeholder="uncontrolled text type here..."
        ref={inputRef}
      />
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
};

export default Uncontrolled;
