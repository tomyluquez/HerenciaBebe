import React, { useEffect, useState } from "react";
import getOrders from "../../Services/getOrders";
import { Skeleton, Stack } from "@chakra-ui/react";
import Orders from "./Orders";
import { useNavigate } from "react-router";

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
      <div style={{ padding: "60px 0px" }}>
        <span style={{ marginTop: "30px" }}>
          Biendenid@ {user.displayName} {user.email}!
        </span>
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
      </div>
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
