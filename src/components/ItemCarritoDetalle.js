const ItemCarritoDetalle = ({ elem, eliminarCarrito, sumarTodo }) => {
  const { id, name, price, quantity } = elem;

  const sumaParcial = price * quantity;

  return (
    <>
      <div style={{ border: "thin solid gray", padding: "1rem" }}>
        <h4>{name}</h4>
        <h5>
          ARS ${price}.00 x {quantity} = ARS ${sumaParcial}.00
        </h5>
        <button onClick={() => eliminarCarrito(id)}>Eliminar Uno</button> {"  "}
        <button onClick={() => eliminarCarrito(id, true)}>Eliminar Todo</button>
      </div>
    </>
  );
};

export default ItemCarritoDetalle;
