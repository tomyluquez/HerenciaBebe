const getPed = (orders, numOrder) => {
  let pedToUpdate = orders.pedidoFinal.filter(
    (pedido) => pedido.numOrder === numOrder
  );
  return pedToUpdate;
};
export default getPed;
