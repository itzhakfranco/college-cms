const Navbar = ({ title }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
      <div className="container">
        <div className="navbar-brand">{title}</div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        ></button>
      </div>
    </nav>
  );
};

export default Navbar;
