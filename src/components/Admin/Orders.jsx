import { Accordion, AccordionIcon, Box } from "@chakra-ui/react";
import React from "react";
import {
  AcordeonItem,
  Acordion,
  ButtonAcordeonOrder,
  DivAcordeonPanel,
  DivContainerDetailProd,
  ImgProd,
  SpanEstado,
} from "../../styles/Admin/OrdersStyles";

const Orders = ({ order }) => {
  return (
    <Acordion allowToggle={true}>
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
              <span>Num orden:{order.numOrder}</span>
              <SpanEstado estado={order.estado}>
                {order.estado.toUpperCase()}
              </SpanEstado>
            </Box>
            <AccordionIcon />
          </ButtonAcordeonOrder>
        </h2>
        <DivAcordeonPanel pb={4}>
          {order.products
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
          <span>TOTAL DEL PEDIDO ${order.totalPagar}</span>
        </DivAcordeonPanel>
      </AcordeonItem>
    </Acordion>
  );
};

export default Orders;
