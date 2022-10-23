//Importación de funcionalidades de React
import { Navigate, Route, Routes } from "react-router-dom";
// Importación de componentes
import Inicio from "../components/Inicio";
import Reservar from "../components/Reservar";
import Menu from "../components/Menu";
import DatosDeContacto from "../components/DatosDeContacto";

function AppRouter() {
  return (
    <>
      <Routes>
        {/* Rutas específicas. */}
        <Route path="inicio" element={<Inicio />} />
        <Route path="reservar" element={<Reservar />} />
        <Route path="menu" element={<Menu />} />
        <Route path="datos-de-contacto" element={<DatosDeContacto />} />
        {/* Ruta en caso de que no se reciba ningún link en específico. Normalmente lleva a la homepage. */}
        <Route path="/" element={<Navigate to="/inicio" />} />
        {/* Ruta por si la URL no fue encontrada. */}
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Error 404</p>
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default AppRouter;
