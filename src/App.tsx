import SearchForm from "./components/SearchForm";
import { useCryptoStore } from "./store";
import "./index.css";
import { useEffect } from "react";
import CryptoPriceDisplay from "./components/CryptoPriceDisplay";
function App() {
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos);
  useEffect(() => {
    fetchCryptos();
  }, []);
  return (
    <>
      <div className="container">
        <h1 className="app-title">
          crypto-currency<span>Quoter</span>
        </h1>
        <div className="content">
          <SearchForm />
          <CryptoPriceDisplay />
        </div>
      </div>
    </>
  );
}

export default App;
