import React, { useEffect, useState } from "react";
import getOrders from "../../Services/getOrders";
import { Skeleton, Stack } from "@chakra-ui/react";
import Orders from "./Orders";
import { useNavigate } from "react-router";
import { DivContainerOrderUser } from "../../styles/Admin/OrdersStyles";

const Users = ({ user }) => {
  const [orders, setOrders] = useState(null);
  const navigate = useNavigate();

  const orderStates = {
    pendiente: 0,
    preparado: 1,
    entregado: 2,
  };

  useEffect(() => {
    user ? getOrders(user.uid, setOrders) : setOrders(false);
  }, []);

  if (orders !== null) {
    return (
      <DivContainerOrderUser>
        <span style={{ marginTop: "30px", color: "white", fontSize: "2rem" }}>
          BIENVENID@ {user.displayName.toUpperCase()}!
        </span>
        <span>Podras ver aqui el estado de tus pedidos</span>
        {orders ? (
          <>
            {orders.pedidoFinal
              .sort((a, b) => orderStates[a.estado] - orderStates[b.estado])
              .map((order) => {
                return <Orders order={order} />;
              })}
          </>
        ) : (
          <>
            <span>Aun no tienes ningun pedido realiado</span>
            <button onClick={() => navigate("/productos")}>
              Realizar mi primer pedido
            </button>
          </>
        )}
      </DivContainerOrderUser>
    );
  }

  return (
    <div style={{ paddingTop: "60px" }}>
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    </div>
  );
};

export default Users;
