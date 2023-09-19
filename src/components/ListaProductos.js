import { useContext } from "react";
import BaseContext from "../context/BaseContext";
import ListaProductosDetalle from "./ListaProductosDetalle";

const ListaProductos = () => {
  const { productos, agregarCarrito } = useContext(BaseContext);

  return (
    <>
      {productos.length > 0 ? (
        productos.map((prod) => (
          <ListaProductosDetalle
            key={prod.id}
            prod={prod}
            agregarCarrito={agregarCarrito}
          />
        ))
      ) : (
        <h4>No hay Ningún producto</h4>
      )}
    </>
  );
};

export default ListaProductos;
