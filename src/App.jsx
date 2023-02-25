import s from "./style.module.css";
import Search from "./components/Search/Search";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";


function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className={s.container}>
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather/>
    </div>
  );
}

export default App;
