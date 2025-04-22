import { useState } from "react";

function Login({ onCancelar }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMensaje("Todos los CAMPOS son obligatorios");
      return;
    }

    if (password.length < 6) {
      setMensaje("La Password debe tener 6 o mas caracteres");
      return;
    }

    const datosLogin = {
      email,
      password,
    };

    console.log("Enviando Info", datosLogin);
    setMensaje("Inicio Exitoso ✅");

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <button onClick={onCancelar}>❌ Cancelar</button>
      <h2>Iniciar sesion</h2>
      <form onSubmit={manejarEnvio}>
        <label>Email:</label><br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />

        <label>Contraseña:</label><br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />

        <button type="submit">Iniciar sesion</button>
      </form>

      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default Login;