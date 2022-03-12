import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="REACT_Navbar">
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <NavLink className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/">
          Cryptocurrencies
        </NavLink>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a className="nav-link px-3" href="/">
              Sign out
            </a>
          </div>
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">
                    {/* <span data-feather="home"></span> */}
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/cryptocurrencies">
                    {/* <span data-feather="file"></span> */}
                    Cryptocurrencies
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/news">
                    {/* <span data-feather="shopping-cart"></span> */}
                    News
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
