import React from "react";

const MisCompras = ({ user }) => {
  if (user.email === "luquez1431@gmail.com") {
    return (
      <div style={{ paddingTop: "83px" }}>
        ACA VAN A ESTAR LA COMPRA DE TODOS LOS USUARIOS
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "83px" }}>
      ACA VAN A ESTAR LAS COMPRAS DE {user.name}
    </div>
  );
};

export default MisCompras;
