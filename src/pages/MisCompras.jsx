import React from "react";
import Admin from "../components/Admin/Admin";
import Users from "../components/Admin/Users";

const MisCompras = ({ user }) => {
  if (user.email === "luquez1431@gmail.com") {
    return (
      <div style={{ paddingTop: "83px" }}>
        <Admin />
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "83px" }}>
      <Users user={user} />
    </div>
  );
};

export default MisCompras;
