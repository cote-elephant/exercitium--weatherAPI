import "dotenv/config";
import chalk from "chalk";

const API_KEY = process.env.KEY;

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const city = process.argv[2];
const unit = process.argv[3] || "Fahrenheit";
const unitSymbol = unit === "Fahrenheit" ? "°F" : "°C";

// to prevent missed city
if (!city) {
  console.log(chalk.red("Please provide a city name!"));
  process.exit(1);
}

async function getWeather(city) {
  try {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=${unit}`;
    const res = await fetch(url);
    const weatherData = await res.json();

    if (!res.ok) {
      console.log(chalk.red(`Error: ${weatherData.message}`));
      return;
    }
    const { main, coord, weather, name, wind } = weatherData;
    const temperature = main.temp;
    const condition = weather[0].description;
    const feels_like = main.feels_like;
    const lati = coord.lat;
    const long = coord.lon;
    const humidity = main.humidity;
    const pressure = main.pressure;
    const wind_speed = wind.speed;
    const wind_deg = wind.deg;

    console.log(
      chalk.blueBright.bold(`
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
      @                ${chalk.bgMagenta(" WEATHER REPORT ")}                 @
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
      
      Location: ${chalk.bold.underline(name)} 
      Coordinates: ${chalk.cyanBright(`Lat: ${lati}, Long: ${long}`)}
      
      ${chalk.greenBright("Current Conditions:")}
      - Temperature: ${chalk.yellowBright(
        `${temperature}${unitSymbol}`
      )} (Feels like: ${chalk.yellowBright(`${feels_like}${unitSymbol}`)})
      - Weather: ${chalk.magentaBright(condition)}
      - Humidity: ${chalk.cyan(`${humidity}%`)}
      - Pressure: ${chalk.cyan(`${pressure} hPa`)}
      - Wind: ${chalk.redBright(
        `${wind_speed} m/s`
      )} blowing at ${chalk.redBright(`${wind_deg}°`)}
      
      ${chalk.bgBlue.whiteBright(" Stay informed and stay safe! ")}
      `)
    );
  } catch (error) {
    console.log(chalk.red(`Error fetching weather data: ${error.message}`));
  }
}
getWeather(city);
