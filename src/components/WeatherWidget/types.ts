export type TDatatype = "temperature" | "pressure" | "humidity" | "windSpeed";

interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface IWind {
  speed: number;
  deg: number;
}

interface IWeatherData {
  dt: number;
  main: IMain;
  weather: IWeather[];
  wind: IWind;
  dt_txt: string;
}

export interface IWeatherResponse {
  city: {
    name: string;
  };
  list: IWeatherData[];
}

export interface IWeatherDataPoint {
  date: Date;
  temperature: number;
  pressure: number;
  humidity: number;
  windSpeed: number;
}

export interface IWeatherPointsForCity {
  city: string;
  dataPoints: IWeatherDataPoint[];
}

export interface ICity {
  name: string;
  color: string;
  active: boolean;
}
