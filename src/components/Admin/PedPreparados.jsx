import { Accordion, AccordionIcon, Box } from "@chakra-ui/react";
import React from "react";
import {
  AcordeonItem,
  ButtonAcordeonOrder,
  DivAcordeonPanel,
  DivContainerDetailProd,
  ImgProd,
  SpanEstado,
} from "../../styles/Admin/OrdersStyles";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import firebaseApp from "../../Firebase/config";
import getPed from "../../Services/getPed";
import useOrders from "../../Hooks/useOrders";
const db = getFirestore(firebaseApp);

const PedPreparados = ({ ped, set, change }) => {
  const setPreparado = async (pedido) => {
    const orderRef = doc(db, "orders", pedido.uid);

    const orders = await useOrders(pedido.uid);
    const pedToUpdate = getPed(orders, pedido.numOrder);

    getDoc(orderRef)
      .then((doc) => {
        if (doc.exists()) {
          const pedidoFinal = doc.data().pedidoFinal || [];

          const indexToUpdate = pedidoFinal.findIndex(
            (pedido) => pedido.numOrder === pedToUpdate[0].numOrder
          );

          if (indexToUpdate !== -1) {
            pedidoFinal[indexToUpdate].estado = "entregado"; // Actualiza el estado del pedido

            set(!change);
            return updateDoc(orderRef, { pedidoFinal: pedidoFinal });
          } else {
            console.log("El pedido no se encontró en el array");
          }
        } else {
          console.log("El documento no existe");
        }
      })
      .catch((error) => {
        console.error("Error al actualizar el pedido", error);
      });
  };

  return (
    <div>
      {ped.map((pedido) => (
        <Accordion allowToggle={true} maxWidth="800px" minWidth="150px">
          <AcordeonItem>
            <h2>
              <ButtonAcordeonOrder>
                <Box
                  as="span"
                  flex="1"
                  display="flex"
                  justifyContent="space-between"
                  padding="0 15px"
                >
                  <span>Num orden:{pedido.numOrder}</span>
                  <SpanEstado estado={pedido.estado}>
                    {pedido.estado.toUpperCase()}
                  </SpanEstado>
                </Box>
                <AccordionIcon />
              </ButtonAcordeonOrder>
            </h2>
            <DivAcordeonPanel pb={4}>
              {pedido.products
                .slice()
                .reverse()
                .map((product) => {
                  return (
                    <>
                      <DivContainerDetailProd>
                        <div className="FOTO">
                          <ImgProd src={`/.${product.foto}`} alt="" />
                        </div>
                        <span className="NAME">PRODUCTO: {product.name}</span>
                        <span className="CANTIDAD">
                          CANTIDAD: {product.cantidad}
                        </span>
                        <span className="TALLE">TALLE: {product.talle}</span>
                      </DivContainerDetailProd>
                    </>
                  );
                })}
              <span>TOTAL DEL PEDIDO ${pedido.totalPagar}</span>
              <button onClick={() => setPreparado(pedido)}>
                MARCAR COMO ENTREGADO
              </button>
            </DivAcordeonPanel>
          </AcordeonItem>
        </Accordion>
      ))}
    </div>
  );
};

export default PedPreparados;
