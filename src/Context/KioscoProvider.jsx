import { createContext, useEffect, useState } from "react";
import data from "../data/data.json";

export const kioskoContext = createContext();

export const KioscoProvider = ({ children }) => {
  const [clientes, setClientes] = useState();
  const [compras, setCompras] = useState();
  const [pagos, setPagos] = useState();
  const [clientefiltrado, setClientefiltrado] = useState([]);

  useEffect(() => {
    setClientes(data.clientes);
    setCompras(data.compras);
    setPagos(data.pagos);
  }, []);

  const actualizarSaldo = (id, monto, tipo) => {
    setClientes((prevClientes) =>
      prevClientes.map((cliente) => {
        if (cliente.id === id) {
          let nuevoSaldo =
            tipo === "compra"
              ? cliente.saldo + Number(monto) // Suma a la deuda
              : cliente.saldo - Number(monto); // Resta cuando paga

          return { ...cliente, saldo: nuevoSaldo };
        }
        return cliente;
      })
    );
  };

  return (
    <kioskoContext.Provider
      value={{
        clientes,
        compras,
        pagos,
        setClientes,
        setCompras,
        setPagos,
        clientefiltrado,
        setClientefiltrado,
        actualizarSaldo,
      }}
    >
      {children}
    </kioskoContext.Provider>
  );
};
