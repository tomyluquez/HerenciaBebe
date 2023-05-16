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

const PedEnviados = ({ ped }) => {
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
            </DivAcordeonPanel>
          </AcordeonItem>
        </Accordion>
      ))}
    </div>
  );
};

export default PedEnviados;
