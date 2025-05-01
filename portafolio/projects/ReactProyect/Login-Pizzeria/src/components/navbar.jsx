function Navbar({ onLoginClick, onCreateAccount, totalCart, profile, totalPrecio}) {
  const total = totalCart ?? 0;
    return (
      <nav>
        <ul>
          <li><button>HOME</button></li>
          {!profile && (<li><button onClick={onLoginClick}>Login</button></li>)}
          {!profile && (<li><button onClick={onCreateAccount}>Create Account</button></li>)}
          {profile && (<li><button>Profile</button></li>)}
          <li><button>🛒 Carrito: ${totalPrecio}</button></li>
        </ul>
      </nav>
    );
  }

  export default Navbar;