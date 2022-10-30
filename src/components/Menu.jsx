import Wok from "../images/menu-wok.jpg";
import Pokes from "../images/menu-poke.jpg";
import Mochi from "../images/menu-mochi.jpg";

function Menu() {
  return (
    <>
      <div class="container text-center">
        <div className="row">
          <div className="col">
            <h2 className="mt-4">Prueba nuestro Menú 🥢</h2>
            <p className="text-start">
              Desde nuestros tradicinales Woks hasta los dulces postres del
              continente asiático. ¡Estamos seguros de que te encantarán!
            </p>
          </div>
        </div>
        <div class="row m-3 menu">
          <div class="col">
            <p className="menu-product">Woks</p>
            <img className="menu-image" src={Wok} alt="" width="100%" />
            <p className="text-start">
              Escoge tus verduras favoritas para freír, guisar, hervir o cocer
              al vapor. También incluye una porción de proteína.
            </p>
          </div>
          <div class="col">
            <p className="menu-product">Pokes</p>
            <img className="menu-image" src={Pokes} alt="" width="100%" />
            <p className="text-start">
              Sus ingredientes principales son arroz y proteína cruda, pero se
              le añaden todo tipo de elementos frescos.
            </p>
          </div>
          <div class="col">
            <p className="menu-product">Mochi</p>
            <img className="menu-image" src={Mochi} alt="" width="100%" />
            <p className="text-start">
              Pastel de arroz glutinoso muy famoso en estas tierras. Pueden
              rellenarse con ingredientes dulces o salados.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
