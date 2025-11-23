import { createStaticHandler } from "react-router-dom";

export default function App() {
  //Funççao assincrona fetch para atualizar o usuário existente

  const updateUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/users/9fb6", {
        method: "PUT", //metodo atualiza um registro existente
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          name: "Não tenho ideia",
          email: "eunaosei@gmail.com",
        }),
      });
      const data = await response.json();
      console.log("Usuario atualizado:", data);
    } catch (error) {
      console.erros("Erro de atualização", error);
    }
  };

  return <button onClick={updateUser}>Update</button>;
}
