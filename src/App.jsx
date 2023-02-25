import s from "./style.module.css";
import Search from "./components/Search/Search";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className={s.container}>
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
