import SearchForm from "./components/SearchForm";
import "./index.css";
function App() {
  return (
    <>
      <div className="container">
        <h1 className="app-title">
          crypto-currency<span>Quoter</span>
        </h1>
        <div className="content">
          <SearchForm />
        </div>
      </div>
    </>
  );
}

export default App;
