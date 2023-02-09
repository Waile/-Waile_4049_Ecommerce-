import React from "react";

// const PropsData = (prop) => {
// let { name, email, id } = data;
//   return (
//     <div>
//       <p>{prop.data.name}</p>
//       <p>{prop.data.email}</p>
//       <p>{prop.data.id}</p>
//       <p>Arslan Akmal</p>
//     </div>
//   );
// };

const PropsData = (prop) => {
  // let { name, email, id } = data;
  return (
    <div>
      <h2>{prop.userDetails.id}</h2>
      <h2>{prop.userDetails.name}</h2>
      <h2>{prop.userDetails.city}</h2>
      <h2>Waile Naeem</h2>
    </div>
  );
};

export default PropsData;
