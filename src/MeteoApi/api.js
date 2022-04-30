import { API_KEY } from '../config/constants';

export const getCityWeather = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
    const data = await response.json();
    // console.log(data);
    const image = setImage(data);
    const degree = data.main.temp;
    const description = data.weather[0].description;
    const cityName = data.name;
    const lat = data.coord.lat;
    const lon = data.coord.lon;
    console.log(image, degree, description);
    return { image, degree, description, cityName, lat, lon };


};

export const getDailyWeather = async (lon, lat) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&APPID=${API_KEY}&units=metric`);
    const data = await response.json();
    const { daily } = data;
    return daily;
};


// Set the weather image
const setImage = (data) => {
    if(data.weather[0].main === "Clear"){
      return "sun.svg";
    }
  
    if(data.weather[0].main === "Snow"){
      return "snow.svg";
    }
  
    if(data.weather[0].main === "Thunderstorm"){
      return "thunderstorm.svg";
    }
  
    if(data.weather[0].main === "Drizzle" || 
      data.weather[0].main === "Mist" ||
      data.weather[0].main === "Smoke" ||
      data.weather[0].main === "Haze" ||
      data.weather[0].main === "Dust" ||
      data.weather[0].main === "Fog" ||
      data.weather[0].main === "Sand" ||
      data.weather[0].main === "Dust" ||
      data.weather[0].main === "Ash" ||
      data.weather[0].main === "Squall" ||
      data.weather[0].main === "Tornado"){
        return "drizzle.svg";
    }
  
    if(data.weather[0].main === "Clouds"){
      if(data.weather[0].description === "few clouds")
        return "few_clouds.svg";
      else
        return "overcast_clouds.svg";
    }
  
    if(data.weather[0].main === "Rain"){
        return "light_rain.svg";
    }    
  }