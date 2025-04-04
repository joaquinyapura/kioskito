import { useContext, useState } from "react";
import { kioskoContext } from "../Context/KioscoProvider";

export const BuscadordeClientes = () => {
  const { clientes, setClientefiltrado } = useContext(kioskoContext);

  /* Manejo de formulario */
  const [busqueda, setBusqueda] = useState("");
  const handleImput = (e) => {
    let nombre = e.target.value.toLowerCase();
    setBusqueda(nombre);

    if (nombre == "") {
      setResultados([]);
    } else {
      const filtrados = clientes.filter(
        (cliente) =>
          cliente.nombre.toLowerCase().includes(nombre) ||
          cliente.apellido.toLowerCase().includes(nombre)
      );
      setClientefiltrado(filtrados);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`enviaste ${busqueda}`);
  };
  /* Fin del manejo de form */

  return (
    <header className="w-full p-4  bg-slate-800">
      <form action="" onSubmit={handleSubmit}>
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
