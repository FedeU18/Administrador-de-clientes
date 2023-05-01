const url = import.meta.env.VITE_API_URL;
export const obtenerClientes = async () => {
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
  return resultado;
};

export const obtenerCliente = async (id) => {
  const respuesta = await fetch(`${url}/${id}`);
  const resultado = await respuesta.json();
  return resultado;
};

export const agregarCliente = async (datos) => {
  try {
    const respuesta = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
};

export const actualizarCliente = async (id, datos) => {
  try {
    const respuesta = await fetch(`${url}/${id}`, {
      method: "PUT",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
};

export const eliminarCliente = async (id) => {
  try {
    const respuesta = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
};
