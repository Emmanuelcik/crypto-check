import { useState } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../store";
import { Pair } from "../types";
import ErrorMessage from "./ErrorMessage";

const SearchForm = () => {
  const cryptCurrencies = useCryptoStore((state) => state.cryptoCurrencies);

  const initialState = {
    currency: "",
    cryptoCurrency: "",
  };
  const [pair, setPair] = useState<Pair>(initialState);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPair({ ...pair, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(pair).includes("")) {
      setError("Please select both a currency and a cryptocurrency");
      return;
    }
    setError("");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className="field">
        <label htmlFor="currency">Currency: </label>
        <select
          name="currency"
          id="currency"
          onChange={handleChange}
          value={pair.currency}
        >
          <option>--Select--</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="cryptoCurrency">Cryptocurrency: </label>
        <select
          name="cryptoCurrency"
          id="cryptoCurrency"
          onChange={handleChange}
          value={pair.cryptoCurrency}
        >
          <option>--Select--</option>
          {cryptCurrencies.map((currency) => (
            <option key={currency.CoinInfo.Name} value={currency.CoinInfo.Name}>
              {currency.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value={"Quote"} />
    </form>
  );
};

export default SearchForm;
