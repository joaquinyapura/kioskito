import { Route, Routes } from "react-router-dom";
import { KioscoProvider } from "./Context/KioscoProvider";
import { Home } from "./views/Home";
import Navbar from "./Components/Navbar";
import { DetalleCliente } from "./views/DetalleCliente";

function App() {
  return (
    <KioscoProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detallecliente/:id" element={<DetalleCliente />} />
      </Routes>
    </KioscoProvider>
  );
}

export default App;
