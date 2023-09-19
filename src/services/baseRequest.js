import clienteAxios from "../config/axios";

export const baseRequest = () => clienteAxios.get("/productos");
