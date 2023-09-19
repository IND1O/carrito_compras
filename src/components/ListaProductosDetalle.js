import Logo from "../assets/logoBarrio.jpg";

const ListaProductosDetalle = ({ prod, agregarCarrito }) => {
  const { id, name, price } = prod;

  return (
    <div style={{ border: "thin solid gray", padding: "1rem" }}>
      <h4>{name}</h4>
      <img style={{ width: "10rem" }} src={Logo} alt="..." />
      <h5>ARG ${price}.00</h5>
      <button onClick={() => agregarCarrito(id)}>Agregar al Carrito</button>
    </div>
  );
};

export default ListaProductosDetalle;
