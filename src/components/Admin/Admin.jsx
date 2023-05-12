import React, { useEffect, useState } from "react";
import getOrders from "../../Services/getOrders";
import {
  Accordion,
  AccordionIcon,
  Box,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import useSepararPedidos from "../../Hooks/useSepararPedidos";
import PedPendientes from "./PedPendientes";
import PedEnviados from "./PedEnviados";
import useJuntarOrders from "../../Hooks/useJuntarOrders";
import {
  AcordeonItem,
  Acordion,
  ButtonAcordeonOrder,
  DivAcordeonPanel,
  DivContainerOrderUser,
  SpanEstado,
} from "../../styles/Admin/OrdersStyles";
import PedPreparados from "./PedPreparados";

const Admin = ({ user }) => {
  const [pedPendientes, setPedPendientes] = useState(null);
  const [pedEnviados, setPedEnviados] = useState(null);
  const [pedPreparados, setPedPreparados] = useState(null);
  const [change, setChange] = useState(false);

  useEffect(() => {
    const setearOrders = async () => {
      try {
        const ordersData = await getOrders("all");
        const ordersFinal = useJuntarOrders(ordersData);
        const [pedPendientes, pedEnviados, pedPreparados] =
          useSepararPedidos(ordersFinal);
        setPedPendientes(pedPendientes);
        setPedEnviados(pedEnviados);
        setPedPreparados(pedPreparados);
      } catch (error) {
        setPedPendientes(false);
      }
    };
    setearOrders();
  }, [change]);

  if (pedPendientes !== null) {
    return (
      <DivContainerOrderUser>
        <span style={{ marginTop: "30px", color: "white", fontSize: "2rem" }}>
          HOLA HERENCIA!
        </span>
        {
          <>
            {
              <Acordion allowToggle={true}>
                <AcordeonItem>
                  <h2>
                    <ButtonAcordeonOrder>
                      <Box as="span" flex="1" padding="0 15px">
                        <span>PEDIDOS PENDIENTES ({pedPendientes.length})</span>
                      </Box>
                      <AccordionIcon />
                    </ButtonAcordeonOrder>
                  </h2>
                  <DivAcordeonPanel pb={4}>
                    <PedPendientes
                      ped={pedPendientes}
                      set={setChange}
                      change={change}
                    />
                  </DivAcordeonPanel>
                </AcordeonItem>
              </Acordion>
            }

            {
              <Acordion allowToggle={true}>
                <AcordeonItem>
                  <h2>
                    <ButtonAcordeonOrder>
                      <Box as="span" flex="1" padding="0 15px">
                        <span>PEDIDOS PREPARADOS ({pedPreparados.length})</span>
                      </Box>
                      <AccordionIcon />
                    </ButtonAcordeonOrder>
                  </h2>
                  <DivAcordeonPanel pb={4}>
                    <PedPreparados
                      ped={pedPreparados}
                      set={setChange}
                      change={change}
                    />
                  </DivAcordeonPanel>
                </AcordeonItem>
              </Acordion>
            }

            {
              <Acordion allowToggle={true}>
                <AcordeonItem>
                  <h2>
                    <ButtonAcordeonOrder>
                      <Box as="span" flex="1" padding="0 15px">
                        <span>PEDIDOS ENTREGADOS ({pedEnviados.length})</span>
                      </Box>
                      <AccordionIcon />
                    </ButtonAcordeonOrder>
                  </h2>
                  <DivAcordeonPanel pb={4}>
                    <PedEnviados ped={pedEnviados} />
                  </DivAcordeonPanel>
                </AcordeonItem>
              </Acordion>
            }
          </>
        }
      </DivContainerOrderUser>
    );
  }

  return (
    <div>
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

export default Admin;
