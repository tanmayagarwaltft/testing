// import React, { useState, useEffect } from "react";

// const Home = () => {
//   const [firstName, setFirstName] = useState("tanmay");
//   const [lastName, setLastName] = useState("agarwal");

//   useEffect(() => {
//     // componentDidMount
//     // console.log(firstName, lastName);
//     console.log("entry of home page");

//     return () => {
//       console.log("exit from home page");
//     };
//   }, []);

//   // useEffect(() => {
//   //   // componentWillUpdate
//   //   console.log("change", firstName, lastName);
//   // }, [firstName, lastName]);

//   return (
//     <div>
//       HOME COMPONENT
//       <input
//         type="text"
//         value={firstName}
//         onChange={(e) => setFirstName(e.target.value)}
//       />
//       <input
//         type="text"
//         value={lastName}
//         onChange={(e) => setLastName(e.target.value)}
//       />
//       <button
//         onClick={() => {
//           console.log("submit", firstName, lastName);
//         }}
//       >
//         SUBMIT
//       </button>
//     </div>
//   );
// };

// export default Home;

import React from "react";

const Home = () => {
  return <div>Home</div>;
};

export default Home;
