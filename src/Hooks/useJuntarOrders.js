const useJuntarOrders = (orders) => {
  let ordersFinal = [];

  orders.map((pedidos) => {
    return pedidos.pedidoFinal.map((pedido) => {
      return ordersFinal.push(pedido);
    });
  });

  return ordersFinal;
};

export default useJuntarOrders;
