import useOrders from "../Hooks/useOrders";

const getOrders = async (uid, setOrders) => {
  const ordersData = await useOrders(uid);
  if (uid === "all") return ordersData;
  setOrders(ordersData);
};

export default getOrders;
