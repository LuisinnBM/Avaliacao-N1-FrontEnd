function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" 
          alt="Logo do Airbnb" 
          className="header__logo"
        />
      </div>
      
      <nav className="header__nav">
        <div className="nav__links">
          <a href="#about" className="nav__link">Sobre</a>
          <a href="#services" className="nav__link">Serviços</a>
          <a href="#contact" className="nav__link">Contato</a>
        </div>
        <button className="btn btn-primary">Cadastre-se</button>
      </nav>
    </header>
  );
}

export default Header;