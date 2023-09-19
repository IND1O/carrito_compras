import { useContext } from "react";
import BaseContext from "../context/BaseContext";

const CajaTotal = () => {
  const { limpiarCarrito, sumarTodo } = useContext(BaseContext);

  return (
    <div>
      <h4>
        Total a Pagar = <strong>ARG ${sumarTodo()}.00</strong>
      </h4>
      <button onClick={() => limpiarCarrito()}>Limpiar Carrito</button>
    </div>
  );
};

export default CajaTotal;
