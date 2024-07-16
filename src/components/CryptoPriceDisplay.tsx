import { useMemo } from "react";
import "../index.css";
import { useCryptoStore } from "../store";
import Spinner from "./Spinner";

const CryptoPriceDisplay = () => {
  const priceData = useCryptoStore((state) => state.priceData);
  const loading = useCryptoStore((state) => state.loading);
  const hasResult = useMemo(
    () =>
      !Object.values(priceData).includes("") &&
      Object.values(priceData).length > 0,
    [priceData]
  );

  return (
    <div className="result-container">
      {loading ? (
        <Spinner />
      ) : (
        hasResult && (
          <>
            <h2>Here's the info</h2>
            <div className="price-display">
              <img
                src={`https://cryptocompare.com/${priceData.IMAGEURL}`}
                alt="image crypto description"
              />
              <div>
                <p>
                  Price: <span>{priceData.PRICE}</span>
                </p>
                <p>
                  Highest Price today: <span>{priceData.HIGHDAY}</span>
                </p>
                <p>
                  Lowest Price Today: <span>{priceData.LOWDAY}</span>
                </p>
                <p>
                  Variation last 24 hours:
                  <span>{priceData.CHANGEPCT24HOUR}</span>
                </p>
                <p>
                  Last Update: <span>{priceData.LASTUPDATE}</span>
                </p>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default CryptoPriceDisplay;
