import moment from "moment";
import { TooltipProps } from "recharts";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";
import { Image, MetricsContainer, MetricWrapper, TooltipWrapper } from "./CustomTooltipStyled";
import { IWeatherPointsForCity } from "../../types";

interface CustomTooltipProps extends TooltipProps<ValueType, NameType> {
  weatherData: IWeatherPointsForCity[];
}

const CustomTooltip = ({ active, payload, label, weatherData }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <TooltipWrapper>
        {moment(label).format("DD.MM.YY HH:mm")}
        {weatherData.map((cityData, index) => {
          const cityPayload = payload.find((item) => item.name === cityData.city);

          if (cityPayload) {
            return (
              <MetricsContainer key={index}>
                <h3>{cityData.city}</h3>
                <MetricWrapper>
                  <Image src="/icons/temperature.svg" alt="temperature" />
                  {cityPayload.payload[cityData.city].temperature}
                </MetricWrapper>
                <MetricWrapper>
                  <Image src="/icons/pressure.svg" alt="pressure" />
                  {cityPayload.payload[cityData.city].pressure}
                </MetricWrapper>
                <MetricWrapper>
                  <Image src="/icons/humidity.svg" alt="humidity" />
                  {cityPayload.payload[cityData.city].humidity}
                </MetricWrapper>
                <MetricWrapper>
                  <Image src="/icons/windSpeed.svg" alt="windSpeed" />
                  {cityPayload.payload[cityData.city].windSpeed}
                </MetricWrapper>
              </MetricsContainer>
            );
          }
          return null;
        })}
      </TooltipWrapper>
    );
  }

  return null;
};

export default CustomTooltip;
