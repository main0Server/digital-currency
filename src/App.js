import {
  Cryptocurrencies,
  CryptoDetails,
  Footer,
  Homepage,
  Navbar,
  News,
} from "./components";

import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <div className="NavBar">
        <Navbar />
      </div>
      <div className="main-app col-md-9 ms-sm-auto col-lg-10 p-1">
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/cryptocurrencies">
            <Cryptocurrencies />
          </Route>

          <Route exact path="/crypto/:coinId">
            <CryptoDetails />
          </Route>

          <Route exact path="/news">
            <News />
          </Route>
        </Switch>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
