export const Navbar = () => {
  return (
    <header>
      <div className="container">
        
        <div className="logo-brand">
          <a href="/">LUCKY TUTU</a>
        </div>

        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/register" className="btn register">Register</a></li>
            <li><a href="/login" className="btn login">Login</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
};
