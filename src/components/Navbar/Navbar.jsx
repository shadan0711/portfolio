import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">SHADAN.</div>

      <nav>
        <a href="#about">About</a>
        <a href="#work">Projects</a>
        <a href="#journal">Journal</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;