import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="REACT_Navbar">
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow mb-4">
        <NavLink className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/">
          Cryptocurrencies
        </NavLink>
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
