import React, { useState } from "react";

const Controlled = () => {
  const [firstName, setFirstName] = useState("");
  return (
    <div>
      <div>Controlled</div>
      <input
        type="text"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
          if (e.target.value === "tanmay") console.log("value is tanmay");
        }}
      />
    </div>
  );
};

export default Controlled;
