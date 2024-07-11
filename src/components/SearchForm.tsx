import { currencies } from "../data";

const SearchForm = () => {
  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Currency: </label>
        <select name="currency" id="currency">
          <option>--Select--</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="crytocurrency">Cryptocurrency: </label>
        <select name="crytocurrency" id="crytocurrency">
          <option>--Select--</option>
        </select>
      </div>

      <input type="submit" value={"Quote"} />
    </form>
  );
};

export default SearchForm;
