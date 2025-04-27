import { useState } from "react";

function Registro({ onCancelar }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarPassword, setConfirmarPassword] = useState("");
  const [errores, setErrores] = useState({});
  const [usuarioRegistrado, setUsuarioRegistrado] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const validar = () => {
    const nuevosErrores = {};

    if (!email.trim()) {
      nuevosErrores.email = "El email es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      nuevosErrores.email = "El email no es válido.";
    }

    if (!password.trim()) {
      nuevosErrores.password = "La contraseña es obligatoria.";
    } else if (password.length < 6) {
      nuevosErrores.password = "La contraseña debe tener al menos 6 caracteres.";
    }

    if (!confirmarPassword.trim()) {
      nuevosErrores.confirmarPassword = "Debe confirmar la contraseña.";
    } else if (password !== confirmarPassword) {
      nuevosErrores.confirmarPassword = "Las contraseñas no coinciden.";
    }

    return nuevosErrores;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidados = validar();
  
    if (Object.keys(erroresValidados).length === 0) {
      setErrores({});
      const datos = {
        email,
        password,
      };
      setUsuarioRegistrado(datos);
      setMensaje("Registro exitoso ✅");
  
      setEmail("");
      setPassword("");
      setConfirmarPassword("");
    } else {
      setErrores(erroresValidados);
      setUsuarioRegistrado(null);
      setMensaje("");
    }
  };

  return (
    <div>
      <button onClick={onCancelar}>❌ Cancelar</button>
      <h2>Formulario de Registro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/>
        {errores.email && <p>{errores.email}</p>}

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/>
        {errores.password && <p>{errores.password}</p>}

        <input
          type="password"
          placeholder="Confirmar contraseña"
          value={confirmarPassword}
          onChange={(e) => setConfirmarPassword(e.target.value)}
        /><br/>
        {errores.confirmarPassword && <p>{errores.confirmarPassword}</p>}

        <button type="submit">Registrarse</button>
      </form>

      {mensaje && <p>{mensaje}</p>}

      {usuarioRegistrado && (
        <div>
          <h4>Datos:</h4>
          <p>Email: {usuarioRegistrado.email}</p>
          <p>Password: {usuarioRegistrado.password}</p>
        </div>
      )}
    </div>
  );
}

export default Registro;
