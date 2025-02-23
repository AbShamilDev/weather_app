import { useEffect, useState } from "react";
import axios from "axios";
import {
  CartesianGrid,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  YAxis,
  XAxis,
  Line,
} from "recharts";
import moment from "moment";
import {
  Button,
  ControlsWrapper,
  Input,
  SwithesWrapper,
  WidgetWrapper,
} from "./WeatherWidgetStyled";
import CustomTooltip from "./components/CustomTooltip/CustomTooltip";
import ResolutiuonSwitch from "./components/Switches/ResolutiuonSwitch/ResolutiuonSwitch";
import DatatypeSwitch from "./components/Switches/DatatypeSwitch/DatatypeSwitch";
import {
  ICity,
  TDatatype,
  IWeatherPointsForCity,
  IWeatherResponse,
  IWeatherDataPoint,
} from "./types";
import CustomLegend from "./components/CustomLegend/CustomLegend";

const intervals = {
  1: 7,
  2: 3,
  4: 1,
  8: 0,
};

export const colors = ["#fad400", "#14da9e", "#932ac4", "#2a0fc2"];

function WeatherWidget() {
  const [city, setCity] = useState<string>("");
  const [citiesState, setCitiesState] = useState<ICity[]>([]);
  const [weatherData, setWeatherData] = useState<IWeatherPointsForCity[]>([]);
  const [dataType, setDataType] = useState<TDatatype>("temperature");
  const [resolution, setResolution] = useState<1 | 2 | 4 | 8>(1);

  const getWeather = (city: string) =>
    axios
      .get<IWeatherResponse>(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      )
      .then((response) => {
        const data = response.data.list.map((item) => ({
          date: new Date(item.dt_txt),
          temperature: item.main.temp,
          pressure: item.main.pressure,
          humidity: item.main.humidity,
          windSpeed: item.wind.speed,
        }));

        setCitiesState((prev) =>
          prev.some((prevCity) => prevCity.name === city)
            ? prev
            : [
                ...prev,
                {
                  name: city,
                  color: colors[prev.length % colors.length],
                  active: true,
                },
              ]
        );

        setWeatherData((prev) => {
          const existingCityIndex = prev.findIndex((cityData) => cityData.city === city);
          if (existingCityIndex !== -1) {
            const updatedData = [...prev];
            updatedData[existingCityIndex] = { city: city, dataPoints: data };
            return updatedData;
          }
          return [...prev, { city: city, dataPoints: data }];
        });
      });

  const onClickHandler = () => {
    getWeather(city);
  };

  const handleDataTypeChange = (value: TDatatype) => {
    setDataType(value);
  };

  useEffect(() => {
    if (weatherData.length === 0) {
      navigator.geolocation.getCurrentPosition((position) => {
        const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${
          position.coords.latitude
        }&lon=${position.coords.longitude}&appid=${import.meta.env.VITE_API_KEY}`;
        axios.get(url).then((data) => {
          setCity(data.data[0].name);
          getWeather(data.data[0].name);
        });
      });
    }
  }, [weatherData]);

  // @ts-ignore
  const combinedData: { date: Date; [key: string]: IWeatherDataPoint }[] = [];

  weatherData
    .filter((data) => citiesState.find((city) => city.name === data.city)?.active)
    .forEach((cityData) => {
      cityData.dataPoints.forEach((point) => {
        const existingPoint = combinedData.find((p) => p.date.getTime() === point.date.getTime());
        if (existingPoint) {
          existingPoint[cityData.city] = point;
        } else {
          const newPoint = { date: point.date, [cityData.city]: point };
          // @ts-ignore
          combinedData.push(newPoint);
        }
      });
    });

  return (
    <WidgetWrapper>
      <ControlsWrapper>
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            city && onClickHandler();
          }}
        >
          <Input id="city" type="text" value={city} onChange={(ev) => setCity(ev.target.value)} />
          <Button>Найти</Button>
        </form>

        <SwithesWrapper>
          <DatatypeSwitch onChange={handleDataTypeChange} value={dataType} />

          <ResolutiuonSwitch
            onChange={(value: number) => setResolution(value as 1 | 2 | 4 | 8)}
            value={resolution}
          />
        </SwithesWrapper>
      </ControlsWrapper>

      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={combinedData.filter((_, i) => !(i % resolution))}>
          <CartesianGrid />
          <XAxis
            dataKey="date"
            tickFormatter={(date) => moment(date).format("DD.MM.YY")}
            interval={intervals[resolution]}
          />
          <YAxis />
          <Tooltip
            content={<CustomTooltip weatherData={weatherData} />}
            cursor={!!combinedData.length}
          />
          {weatherData.map((cityData, index) => (
            <Line
              key={index}
              type="monotone"
              dataKey={`${cityData.city}.${dataType}`}
              stroke={citiesState.find((city) => city.name === cityData.city)?.color}
              activeDot={{ r: 5 }}
              name={cityData.city}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
      <CustomLegend citiesState={citiesState} setCitiesState={setCitiesState} />
    </WidgetWrapper>
  );
}

export default WeatherWidget;
