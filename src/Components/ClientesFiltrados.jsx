import { useContext, useState } from "react";
import { kioskoContext } from "../Context/KioscoProvider";

export const ClientesFiltrados = () => {
  const { clientefiltrado, actualizarSaldo } = useContext(kioskoContext);
  const [modo, setModo] = useState(null);
  const [input, setInput] = useState("");

  const transaccionImput = (e) => {
    setInput(e.target.value);
  };
  const procesarTransacción = (e, id) => {
    e.preventDefault();
    if (modo == "compra") {
      actualizarSaldo(id, input, "compra");

      setModo(null);
      setInput();
    } else {
      actualizarSaldo(id, input, "pago");
      setModo(null);
      setInput();
    }
  };

  return (
    <section className="w-full p-4 mt-2">
      {clientefiltrado.map((cliente) => (
        <div
          key={cliente.id}
          className="flex flex-col text-center bg-sky-200 mb-2 p-4  rounded-md"
        >
          <div href="#" className=" w-full ">
            {cliente.nombre} {cliente.apellido}
          </div>
          <div className="font-bold"> ${cliente.saldo} </div>
          <form className="w-full p-2 flex gap-2">
            <button
              type="button"
              className={`px-4 py-2 rounded-md w-full text-white transition ${
                modo === "compra"
                  ? "bg-green-500 ring-2 ring-white"
                  : "bg-green-700 hover:bg-green-700"
              }`}
              onClick={() => setModo("compra")}
            >
              🛒 Compra
            </button>

            <button
              type="button"
              className={`px-4 py-2 rounded-md w-full text-white transition ${
                modo === "pago"
                  ? "bg-red-500 ring-2 ring-white"
                  : "bg-orange-800 hover:bg-green-700"
              }`}
              onClick={() => setModo("pago")}
            >
              💰 Pago
            </button>
          </form>
          {modo && (
            <form
              className="flex flex-col mt-2"
              onSubmit={(e) => procesarTransacción(e, cliente.id)}
            >
              <input
                type="number"
                placeholder="ingrese monto"
                className="p-2 bg-white"
                onChange={transaccionImput}
              />
              <button className="p-2 bg-green-400 mt-4">enviar</button>
            </form>
          )}
        </div>
      ))}
    </section>
  );
};
