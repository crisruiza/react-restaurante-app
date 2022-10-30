import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

function Reservar() {
  // Formulario
  const [formulario, setFormulario] = useState({
    nombre: "",
    comensales: "",
    datetime: "",
  });

  const handleInputChange = (event) => {
    setFormulario({
      ...formulario,
      [event.target.name]: event.target.value,
    });
  };

  const guardarFormulario = async (event) => {
    event.preventDefault();
    console.log(formulario);
    await addDoc(collection(db, "Reservaciones"), formulario);
  };

  // Tabla

  const [datos, setDatos] = useState([]);

  const getData = async () => {
    // const snapshot = await getDocs(collection(db, "Reservaciones"));
    // // console.log(snapshot.docs.map((doc) => doc.data()));
    // setDatos(snapshot.docs.map((doc) => doc.data()));

    onSnapshot(collection(db, "Reservaciones"), (querySnapshot) => {
      setDatos(
        querySnapshot.docs.map((doc) => {
          return { ...doc.data() };
        })
      );
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* <code>{JSON.stringify(formulario)}</code> */}
      <div className="m-4">
        <h2 className="text-center">Reservar 🗓 </h2>
        <p>
          En esta sección podrás reservar una mesa para Districto Wok. Lo único
          que debes ingresar es tu nombre, el número de comensales y la fecha y
          hora de su visita. ¡Los esperamos!
        </p>
        <form onSubmit={guardarFormulario}>
          <div className="mb-3 mt-5">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Número de comensales</label>
            <input
              type="number"
              className="form-control"
              name="comensales"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Fecha y hora de reservación</label>
            <input
              type="datetime-local"
              className="form-control"
              name="datetime"
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="">
            Enviar
          </button>
        </form>
        <table className="table table-bordered mt-5" id="tblReservaciones">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">PAX</th>
              <th scope="col">Fecha y hora de reservación</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((reservacion, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{reservacion.nombre}</td>
                  <td>{reservacion.comensales}</td>
                  <td>{reservacion.datetime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Reservar;
