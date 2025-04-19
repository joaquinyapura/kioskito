import { useContext, useState } from "react";
import { kioskoContext } from "../Context/KioscoProvider";

export const BuscadordeClientes = () => {
  /* Manejo de formulario */
  const { setBusqueda } = useContext(kioskoContext);
  const handleImput = (e) => {
    let nombre = e.target.value.toLowerCase();
    setBusqueda(e.target.value.toLowerCase());
  };

  /* Fin del manejo de form */

  return (
    <header className="w-full p-4  bg-slate-800">
      <form action="">
        <h2 className="text-white w-full text-center  p-2 text-2xl">
          Buscar Clientes
        </h2>
        <div className="flex">
          <input
            type="text"
            className="w-full bg-white rounded-full p-4"
            onChange={handleImput}
          />
        </div>
      </form>
    </header>
  );
};
