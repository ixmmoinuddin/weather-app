import axios from "axios";

async function getWeatherAndForecast(coordinates) {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/onecall?",
    {
      params: {
        lat: coordinates.lat,
        lon: coordinates.lng,
        exclude: "minutely,hourly,alerts",
        appid: "735654d6cfc4e5d9ec9c810e34f5254a",
        units: "metric"
      }
    }
  );
  return response;
}

export default getWeatherAndForecast;
