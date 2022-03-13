import millify from "millify";
import { Link } from "react-router-dom";
import { Loader } from "../../components";

import { Cryptocurrencies, News } from "../../components";
import { useGetCryptosQuery } from "../../services/cryptoApi";

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <div className="container-fluid">
      <div className="row justify-content-end text-dark">
        <div className="table-responsive">
          <h2>Global Crypto Stats</h2>
          <table className="table table-sm text-dark">
            <thead>
              <tr>
                <th scope="col">Cryptos</th>
                <th scope="col">Exchanges</th>
                <th scope="col">MarketCap</th>
                <th scope="col">24hVol</th>
                <th scope="col">Markets</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{millify(globalStats.total, { precision: 3 })}</td>
                <td>{millify(globalStats.totalExchanges)}</td>
                <td>{millify(globalStats.totalMarketCap, { precision: 3 })}</td>
                <td>{millify(globalStats.total24hVolume, { precision: 3 })}</td>
                <td>{millify(globalStats.totalMarkets, { precision: 2 })}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-responsive">
          <div>
            <h2>
              Top 10 Cryptos in the world.{" "}
              <Link
                to="/cryptocurrencies"
                className="text-decoration-none fs-6"
              >
                Show more...
              </Link>
            </h2>
            <Cryptocurrencies simplified />
          </div>
          {""}
          <div>
            <h2>
              Crypto News.{" "}
              <Link to="/news" className="text-decoration-none fs-6">
                Show more...
              </Link>
            </h2>
            <News simplified />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
