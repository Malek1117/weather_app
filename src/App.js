import React from "react";
import Display from "./components/Display";

function App() {
  const [search, setSearch] = React.useState("");
  const [data, setData] = React.useState({});

  const handleSearch = () => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=a5fddd628a5946429c9111859223101&q=${search}&aqi=no`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error === undefined) {
          setData(data);
        } else {
          alert(data.error.message);
          setSearch("");
          setData({});
        }
      });
  };

  return (
    <div className="w-screen h-screen">
      <div className="pt-12 mx-auto w-1/3">
        <h1 className="text-white font-bold text-3xl text-center mb-12">
          Weather App
        </h1>
        <input
          className="py-3 pl-3 rounded-lg w-4/6 text-orange-500 text-lg outline-none"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="City"
        />
        <button
          className="w-2/6 bg-orange-500 py-3 px-3 rounded-lg text-white font-bold text-lg active:bg-orange-700"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <Display data={data} />
    </div>
  );
}

export default App;
