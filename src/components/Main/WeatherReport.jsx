import React from "react";

const WeatherReport = ({ data }) => {
  return (
    <article
      id="current"
      className="h-[30rem] w-full rounded-xl flex justify-center items-center relative overflow-hidden border-2"
    >
      <img
        src={`https://source.unsplash.com/1600x900/?${data.current.condition.text}`}
        className="absolute h-screen w-screen"
        alt=""
      />
      <main className="flex flex-col justify-center items-center gap-6 relative z-10 h-full w-full bg-[#0000006b] p-4">
        <div className="flex justify-center items-center gap-2 sm:gap-10 text-3xl sm:text-6xl font-bold flex-col sm:flex-row">
          <h3>{data.location.name}</h3>
          <h4>{Math.floor(data.current.temp_c)}°C</h4>
        </div>
        <div className="flex sm:text-2xl justify-center items-start sm:justify-center gap-6 font-semibold flex-wrap flex-col sm:flex-row">
          <div className="sm:text-2xl">
            <p>Region : {data.location.region}</p>
            <p>Country : {data.location.country}</p>
          </div>
          <div>
            <p>{data.current.condition.text}</p>
            <p>Feels like : {data.current.feelslike_c}°C</p>
          </div>
          <div>
            <p>Humidity : {data.current.humidity}%</p>
            <p>Wind : {data.current.wind_kph} km/h</p>
          </div>
        </div>
      </main>
    </article>
  );
};

export default WeatherReport;
