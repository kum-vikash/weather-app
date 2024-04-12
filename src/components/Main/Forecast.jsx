import React, { useContext } from "react";
import WeatherReport from "./WeatherReport";
import { CurrentDataContext } from "../../contexts/CurrentDataState";

const Forecast = () => {
  const { data } = useContext(CurrentDataContext);
  return (
    <div className="w-full bg-black text-white p-4 flex justify-center items-center flex-col gap-4">
      <article className="flex justify-center items-center gap-4 relative z-10 rounded-xl border-2 overflow-hidden h-full w-full">
        <img
          className="w-full h-full absolute z-10"
          src={`https://source.unsplash.com/1600x900/?weather&${data.current.condition.text}`}
          alt=""
        />
        <main className="relative z-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-center items-center gap-4 h-full w-full bg-[#0000007b] p-4 overflow-scroll">
          {data.location != undefined &&
            data.forecast.forecastday.map((value, index) => (
              <div
                key={index}
                className="flex justify-center items-start flex-col gap-4 flex-wrap bg-[#dbdbdb31] backdrop-blur-[2px] border-2 rounded-xl p-4"
              >
                <p className="text-lg sm:text-2xl">{value.date}</p>
                <div>
                  <p>Max : {value.day.maxtemp_c}°C</p>
                  <p>Min : {value.day.mintemp_c}°C</p>
                  <p>Condition : {value.day.condition.text}</p>
                  <p>Humidity : {value.day.avghumidity}%</p>
                </div>
              </div>
            ))}
        </main>
      </article>
    </div>
  );
};

export default Forecast;
