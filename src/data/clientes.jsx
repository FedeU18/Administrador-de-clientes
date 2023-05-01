export const obtenerClientes = async () => {
  const url = import.meta.env.VITE_API_URL;
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
  return resultado;
};