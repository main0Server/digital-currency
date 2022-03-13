import { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Loader } from "../../components";

import { useGetCryptosQuery } from "../../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm)
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <>
      {!simplified && (
        <input
          className="form-control form-control-light"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      )}
      <div className="table-responsive">
        <table className="table table-sm text-dark table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">24h%</th>
              <th scope="col">MarketCap</th>
            </tr>
          </thead>
          <tbody>
            {cryptos?.map((currency) => (
              <tr key={currency.uuid}>
                <th>{currency.rank}</th>
                <td>
                  <Link
                    to={`/crypto/${currency.uuid}`}
                    className="text-decoration-none"
                  >
                    <img
                      src={currency.iconUrl}
                      alt={currency.symbol}
                      style={{ width: "35px", height: "35px" }}
                    />{" "}
                    {currency.name}{" "}
                    <span className="text-muted">{currency.symbol}</span>
                  </Link>
                </td>
                <td>$ {millify(currency.price, { precision: 5 })}</td>
                <td>{millify(currency.change, { precision: 3 })}%</td>
                <td>{millify(currency.marketCap, { precision: 6 })}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cryptocurrencies;
