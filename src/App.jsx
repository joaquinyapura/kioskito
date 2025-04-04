import { BuscadordeClientes } from "./Components/BuscadordeClientes";
import { ClientesFiltrados } from "./Components/ClientesFiltrados";
import { KioscoProvider } from "./Context/KioscoProvider";

function App() {
  return (
    <KioscoProvider>
      <BuscadordeClientes />
      <ClientesFiltrados />
    </KioscoProvider>
  );
}

export default App;
