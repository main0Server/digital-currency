import { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Loader } from "../../components";
import Linechart from "./Linechart";

import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../../services/cryptoApi";

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timeperiod, setTimePeriod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timeperiod,
  });

  const cryptoDetails = data?.data?.coin;

  const time = ["3h", "24h", "7d", "30d"];

  if (isFetching) return <Loader />;

  const CryptoColor = {
    color: cryptoDetails.color,
  };

  return (
    <>
      <h2 style={CryptoColor}>
        {cryptoDetails.name} ({cryptoDetails.symbol}) Price
      </h2>
      <p>
        {cryptoDetails.name} live price in US dollars. View Value statistics,
        market cap and supply
      </p>
      <div className="table-responsive">
        <table className="table table-sm text-dark table-hover">
          <thead>
            <tr>
              <th scope="col">$ Price</th>
              <th scope="col">Rank</th>
              <th scope="col">24hVol</th>
              <th scope="col">MarketCap</th>
              <th scope="col">Daily avg.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{millify(cryptoDetails?.price, { precision: 6 })}</td>
              <td># {cryptoDetails?.rank}</td>
              <td>{millify(cryptoDetails?.["24hVolume"], { precision: 3 })}</td>
              <td>{millify(cryptoDetails?.marketCap, { precision: 6 })}</td>
              <td>
                {millify(cryptoDetails?.allTimeHigh?.price, { precision: 3 })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <h2>Other Statistics</h2>
      <p>
        {cryptoDetails.name} An overview showing the stats of all
        cryptocurrencies
      </p>
      <div className="table-responsive">
        <table className="table table-sm text-dark table-hover">
          <thead>
            <tr>
              <th scope="col">Nr of markets</th>
              <th scope="col">Nr of exchanges</th>
              <th scope="col">AprrovedSupply</th>
              <th scope="col">AllSupply</th>
              <th scope="col">CirculatingSupply</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{cryptoDetails.numberOfMarkets}</td>
              <td>{cryptoDetails.numberOfExchanges}</td>
              <td>
                {cryptoDetails?.supply?.confirmed ? (
                  <i className="bi bi-check-lg" />
                ) : (
                  <i className="bi bi-slash-circle" />
                )}
              </td>
              <td>{millify(cryptoDetails?.supply?.total, { precision: 3 })}</td>
              <td>
                {millify(cryptoDetails?.supply?.circulating, { precision: 3 })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <div>
        <select
          defaultValue="7d"
          className="corm-select border-info rounded w-auto fs-5"
          onChange={(e) => setTimePeriod(e.target.value)}
        >
          {time?.map((date) => (
            <option key={date}>{date}</option>
          ))}
        </select>
        <Linechart
          coinHistory={coinHistory}
          currentPrice={millify(cryptoDetails.price)}
          coinName={cryptoDetails.name}
        />
      </div>
      <hr />
      <div>
        <h1 style={CryptoColor}>{cryptoDetails.name} Links</h1>
        <div className="row m-0">
          {cryptoDetails.links.map((link, id) => (
            <div key={id} className="col-sm-5 col-md-4 my-1 m-auto text-center">
              <div className="card">
                <div className="card-body text-uppercase">
                  <h6 className="card-link text-dark">{link.type}</h6>
                  <a
                    href={link.url}
                    target="_blank"
                    className="btn btn-primary w-100 rounded-pill"
                    rel="noreferrer"
                  >
                    {link.name}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div>
        <h2>
          What is <span style={CryptoColor}>{cryptoDetails.name}</span>
        </h2>
        <div>{HTMLReactParser(cryptoDetails.description)}</div>
      </div>
    </>
  );
};

export default CryptoDetails;
