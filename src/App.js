import "./App.css";
import AppRouter from "./router/AppRouter";
import { NavLink } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="main row gx-0">
        <div className="main-sidebar col-md-4 col-sm-12">
          <div className="main-sidebar-brand m-3">
            <h1>Distrito Wok 🥡</h1>
          </div>
          <div className="main-sidebar-navbar">
            <NavLink to="/inicio">Inicio</NavLink>
            <NavLink to="/menu">Menú</NavLink>
            <NavLink to="/reservar">Reservar</NavLink>
          </div>
          <div
            className="main-sidebar-contact m
          m-3"
          >
            <h3>Datos de contacto</h3>
            <p>
              <i class="fa-solid fa-location-pin"></i> Av. Manuel Acuña 3044,
              Prados Providencia, 44670 Guadalajara, Jal.
            </p>
            <p>
              <i class="fa-solid fa-phone"></i>
              +33 2303 8763
            </p>
            <p>
              <i class="fa-solid fa-envelope"></i>
              info@distrito-wok.com
            </p>
          </div>
        </div>
        <div className="main-content col-md-8 col-sm-12">
          <AppRouter />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
