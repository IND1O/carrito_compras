import { useContext } from "react";
import BaseContext from "../context/BaseContext";
import ItemCarritoDetalle from "./ItemCarritoDetalle";
//import CajaTotal from "./CajaTotal";

const ItemCarrito = () => {
  const { cart, eliminarCarrito } = useContext(BaseContext);

  return (
    <>
      {cart.map((elem, index) => (
        <ItemCarritoDetalle
          key={index}
          elem={elem}
          eliminarCarrito={eliminarCarrito}
        />
      ))}
    </>
  );
};

export default ItemCarrito;
