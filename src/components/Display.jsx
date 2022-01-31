import Clock from "./Clock";

export default function Display({ data }) {
  return (
    <>
      {data.location && (
        <div className="w-1/3 mx-auto mt-5 bg-orange-800 h-fit rounded-xl p-10 text-white">
          <div className="flex justify-around items-center">
            <div className="text-center">
                <img className="mx-auto" src={data.current.condition.icon}  alt=""/>
                <Clock data={data.current.condition.text} />
            </div>
            <div className="font-bold text-2xl">
                <h2>{data.current.temp_c} °C</h2>
              <h2>{data.current.temp_f} °F</h2>
            </div>
          </div>
          <div className="mt-8 px-12 font-normal text-lg">
              <h1>
                Location : {data.location.name}, {data.location.region},{" "}
                {data.location.country}.
              </h1>
              <p>Latitude : {data.location.lat} </p>
              <p> Longitude : {data.location.lon}</p>
              <p>Wind : {data.current.wind_kph} KPH</p>
              <p>Humidity : {data.current.humidity}%</p>
          </div>
        </div>
      )}
    </>
  );
}
