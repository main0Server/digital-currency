import { useState } from "react";
import moment from "moment";
import { Loader } from "../../components";

import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../../services/cryptoApi";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 10 : 60,
  });

  const { data } = useGetCryptosQuery(100);

  if (!cryptoNews?.value) return <Loader />;

  const demoNewsImage =
    "https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

  const NoNewsAvailable =
    "https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

  return (
    <div className="container marketing">
      {!simplified && (
        <div>
          <select
            className="form-select mb-2"
            optionfilterprop="childern"
            onChange={(e) => setNewsCategory(e.target.value)}
          >
            <option defaultValue="Cryptocurrency">Cryptocurrency</option>
            {data?.data?.coins.map((coin, i) => (
              <option value={coin.name} key={i}>
                {coin.name}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className="row">
        {cryptoNews?.value.length === 0 ? (
          <div className="text-center">
            <h1 className="text-info">{newsCategory}: </h1>
            <h2>Sorry, No News Available!</h2>{" "}
            <img className="w-50" src={NoNewsAvailable} alt="news" />
          </div>
        ) : (
          cryptoNews?.value?.map((news, id) => (
            <div className="col-lg-4" key={id}>
              <img
                className="bd-placeholder-img rounded-circle"
                width={140}
                height={140}
                src={news?.image?.thumbnail?.contentUrl || demoNewsImage}
                alt="news"
              />

              <h2>{news.name.substring(0, 45)}...</h2>
              <p>{news.description.substring(0, 65)}...</p>

              <ul className="list-unstyled list-group">
                <li className="list-group-item">
                  <img
                    className="rounded-circle mx-1"
                    width={40}
                    height={40}
                    alt="news"
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoNewsImage
                    }
                  />
                  <a
                    className="btn btn-secondary"
                    href={news.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <small>{news.provider[0]?.name} &raquo;</small>
                  </a>
                </li>
                <li className="list-group-item">
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </li>
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default News;
