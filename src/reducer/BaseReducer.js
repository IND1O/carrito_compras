import { TYPES } from "../action/BaseAction";

export const baseInitialState = {
  productos: [],
  cart: [],
};

export function BaseReducer(state, action) {
  switch (action.type) {
    case TYPES.LEER_BASE_DE_DATOS: {
      return {
        ...state,
        productos: action.payload.map((prod) => prod),
      };
    }

    case TYPES.AGREGAR_AL_CARRITO: {
      let nuevoItem = state.productos.find((x) => x.id === action.payload);
      //console.log("Nuevo Item ==>", action.payload);
      let itemEnCarrito = state.cart.find((y) => y.id === nuevoItem.id);

      return itemEnCarrito
        ? {
            ...state,
            cart: state.cart.map((z) =>
              z.id === nuevoItem.id ? { ...z, quantity: z.quantity + 1 } : z
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...nuevoItem, quantity: 1 }],
          };
    }

    case TYPES.ELIMINAR_UNO_DEL_CARRITO: {
      let res = state.cart.find((x) => x.id === action.payload);

      return res.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((x) =>
              x.id === action.payload ? { ...x, quantity: x.quantity - 1 } : x
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((x) => x.id !== action.payload),
          };
    }

    case TYPES.ELIMINAR_TODO_DEL_CARRITO: {
      return {
        ...state,
        cart: state.cart.filter((x) => x.id !== action.payload),
      };
    }

    case TYPES.LIMPIAR_EL_CARRITO: {
      return baseInitialState;
    }

    default:
      return state;
  }
}
