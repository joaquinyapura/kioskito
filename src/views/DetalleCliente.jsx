import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { kioskoContext } from "../Context/KioscoProvider";

export const DetalleCliente = () => {
  const [comprassemanales, setComprasSemanales] = useState();
  const { id } = useParams();

  const { compras } = useContext(kioskoContext);

  const usuario = parseInt(id);

  useEffect(() => {
    if (compras) {
      const comprasSemanales = compras.filter((e) => e.id_cliente === usuario);
      setComprasSemanales(comprasSemanales);
    }
  }, [compras]);

  return (
    <div>
      {comprassemanales &&
        comprassemanales.map((e, i) => (
          <div
            key={i}
            className="bg-sky-300 p-2 rounded-md w-full flex justify-center gap-6"
          >
            <div>Nombre de cliente</div>
            <div>{e.fecha}</div>
            <div>${e.monto} </div>
          </div>
        ))}
    </div>
  );
};
