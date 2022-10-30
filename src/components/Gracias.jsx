//importaciones
import PropTypes from "prop-types";

// Función destructurada
function Gracias({ nombre }) {
  return (
    <p className="text-center">
      ¡Gracias por reservar en {nombre}! Te esperamos. 😉
    </p>
  );
}

Gracias.propTypes = {
  nombre: PropTypes.string.isRequired,
};

export default Gracias;
