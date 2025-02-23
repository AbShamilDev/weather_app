import { Dispatch, SetStateAction } from "react";
import { ICity } from "../../types";
import { CityContainer, LegendWrapper } from "./CustomLegendStyled";

interface Props {
  citiesState: ICity[];
  setCitiesState: Dispatch<SetStateAction<ICity[]>>;
}

const CustomLegend = ({ citiesState, setCitiesState }: Props) => {
  return (
    <LegendWrapper>
      {citiesState.map((city) => (
        <CityContainer key={city.name} color={city.color}>
          {city.name}
          <input
            type="checkbox"
            checked={city.active}
            onChange={(ev) =>
              setCitiesState((prev) =>
                prev.map((ct) =>
                  ct.name === city.name ? { ...ct, active: ev.target.checked } : ct
                )
              )
            }
          />
        </CityContainer>
      ))}
    </LegendWrapper>
  );
};

export default CustomLegend;
