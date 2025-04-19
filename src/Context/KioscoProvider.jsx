import { createContext, useEffect, useState } from "react";
import data from "../data/data.json";

export const kioskoContext = createContext();

export const KioscoProvider = ({ children }) => {
  const [clientes, setClientes] = useState([]);
  const [compras, setCompras] = useState();
  const [pagos, setPagos] = useState();
  const [busqueda, setBusqueda] = useState("");

  const clientefiltrado = clientes.filter(
    (cliente) =>
      cliente.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      cliente.apellido.toLowerCase().includes(busqueda.toLowerCase())
  );

  useEffect(() => {
    setClientes(data.clientes);
    setCompras(data.compras);
    setPagos(data.pagos);
  }, []);

  const actualizarSaldo = (id, monto, tipo) => {
    /* con este bloque se genera una nueva transacción, sea compra o pago */
    const nuevaTransaccion = {
      id_cliente: id,
      fecha: new Date().toISOString().split("T")[0],
      monto: monto,
    };
    if (tipo === "compra") {
      setCompras((compras) => [...compras, nuevaTransaccion]);
    } else {
      setPagos((compras) => [...compras, nuevaTransaccion]);
    }
    /* fin bloque transacción */

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
        actualizarSaldo,

        busqueda,
        setBusqueda,
      }}
    >
      {children}
    </kioskoContext.Provider>
  );
};
