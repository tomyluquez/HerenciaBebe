const useSepararPedidos = (orders) => {
  let pedPendientes = [];
  let pedPreparados = [];
  let pedEnviados = [];

  for (let pedido of orders) {
    if (pedido.estado === "pendiente") {
      pedPendientes.push(pedido);
    } else if (pedido.estado === "preparado") {
      pedPreparados.push(pedido);
    } else pedEnviados.push(pedido);
  }
  return [pedPendientes, pedEnviados, pedPreparados];
};

export default useSepararPedidos;
