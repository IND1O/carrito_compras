import { TYPES } from "../action/BaseAction";
import { baseRequest } from "../services/baseRequest";
import { useEffect, useReducer } from "react";
import { BaseReducer, baseInitialState } from "../reducer/BaseReducer";
import BaseContext from "./BaseContext";

const BaseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BaseReducer, baseInitialState);
  const { productos, cart } = state;

  const leerDataBase = async () => {
    try {
      const res = await baseRequest();
      if (res.statusText === "OK")
        //console.log("res =>", res.data);
        dispatch({ type: TYPES.LEER_BASE_DE_DATOS, payload: res.data });
    } catch (error) {
      console.log(error.response);
      alert(error.response.statusText);
    }
  };

  const agregarCarrito = (id) => {
    //console.log("ID Product ==>", id);
    dispatch({ type: TYPES.AGREGAR_AL_CARRITO, payload: id });
  };

  const sumarTodo = () => {
    let total = 0;
    if (cart.length > 0) {
      total = cart.reduce((amount, el) => {
        let cantidad = el.price * el.quantity;
        return amount + cantidad;
      }, 0);
      return total;
    }
  };

  const eliminarCarrito = (id, todo = false) => {
    //console.log("id y todo ==>", id, todo);
    if (todo) {
      dispatch({ type: TYPES.ELIMINAR_TODO_DEL_CARRITO, payload: id });
    } else {
      dispatch({ type: TYPES.ELIMINAR_UNO_DEL_CARRITO, payload: id });
    }
  };

  const limpiarCarrito = () => {
    dispatch({ type: TYPES.LIMPIAR_EL_CARRITO });
    leerDataBase();
  };

  useEffect(() => {
    leerDataBase();
  }, []);

  return (
    <BaseContext.Provider
      value={{
        productos,
        cart,
        agregarCarrito,
        limpiarCarrito,
        eliminarCarrito,
        sumarTodo,
      }}
    >
      {children}
    </BaseContext.Provider>
  );
};

export { BaseProvider };
