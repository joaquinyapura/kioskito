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
    <section className="flex flex-col justify-center items-center container mx-auto mt-2">
      <div className="bg-sky-400 p-6 w-full text-center text-2xl text-white font-black">
        <h1>Detalle de últimas compras</h1>
      </div>
      <div className=" w-full">
        {comprassemanales &&
          comprassemanales.map((e, i) => (
            <div
              key={i}
              className="bg-sky-300 p-2 rounded-md w-full flex justify-center items-center mb-1 gap-2"
            >
              <div className="text-sm text-gray-500">fecha {e.fecha}</div>
              <div className="bg-green-300 p-2 rounded-lg">${e.monto} </div>
            </div>
          ))}
      </div>
    </section>
  );
};
