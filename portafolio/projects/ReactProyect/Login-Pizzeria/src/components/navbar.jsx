function Navbar({ onLoginClick, onCreateAccount }) {
    const total = 20000;
  
    return (
      <nav>
        <ul>
          <li><button onClick={onLoginClick}>Login</button></li>
          <li><button onClick={onCreateAccount}>Create Account</button></li>
          <li>🛒 Carrito: ${total.toLocaleString()}</li>
        </ul>
      </nav>
    );
  }

  export default Navbar;