import React, { useState } from "react";

function User({ user }) {
//   const [value, SetValue] = useState(null);
//   SetValue(user);
//   console.log(value);
  return (
    <>
      {user.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <p>{item.email}</p>
          </div>
        );
      })}
    </>
  );
}

export default User;
