import HeroBanner from "../images/hero-banner.jpeg";
function Inicio() {
  return (
    <>
      <img src={HeroBanner} alt="Banner comida asiática" width="100%" />
      <div className="m-3">
        <h2>
          Tenemos lo mejor en Woks 🥡, Pokes 🥙 y demás platillos de Asia Food.
          🥢{" "}
        </h2>
        <p>
          En DISTRITO WOK preparamos lo mejor de los woks y la comida asiática,
          puedes personalizar tus platillos y vivir una experiencia diferente
          cada que nos visites, ¡ya sea en sucursal o nos pidas a través de tu
          plataforma favorita!
        </p>
      </div>
    </>
  );
}

export default Inicio;
