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
      }}
    >
      {children}
    </kioskoContext.Provider>
  );
};
