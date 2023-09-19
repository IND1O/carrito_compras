import "./App.css";
import CajaTotal from "./components/CajaTotal";
import ItemCarrito from "./components/ItemCarrito";
import ListaProductos from "./components/ListaProductos";
import { BaseProvider } from "./context/BaseProvider";

function App() {
  //console.log("Puerto ==>", process.env.REACT_APP_API);
  return (
    <BaseProvider>
      <div>
        <h4>Productos:</h4>
        <article className="box grid-responsive">
          <ListaProductos />
        </article>
        <h4>Carrito:</h4>
        <article className="box grid-responsive">
          <ItemCarrito />
        </article>
        <h4>Caja:</h4>
        <CajaTotal />
      </div>
    </BaseProvider>
  );
}

export default App;
