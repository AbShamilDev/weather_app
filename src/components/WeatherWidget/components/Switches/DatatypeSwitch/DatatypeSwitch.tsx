import { TDatatype } from "../../../types";
import { SwitchButton, SwitchWrapper } from "../SwitchStyled";

const DatatypeSwitch = ({
  onChange,
  value,
}: {
  onChange: (value: TDatatype) => void;
  value: TDatatype;
}) => {
  return (
    <SwitchWrapper>
      <SwitchButton onClick={() => onChange("temperature")} isActive={value === "temperature"}>
        Температура
      </SwitchButton>
      <SwitchButton onClick={() => onChange("pressure")} isActive={value === "pressure"}>
        Давление
      </SwitchButton>
      <SwitchButton onClick={() => onChange("humidity")} isActive={value === "humidity"}>
        Влажность
      </SwitchButton>
      <SwitchButton onClick={() => onChange("windSpeed")} isActive={value === "windSpeed"} isLast>
        Скорость
      </SwitchButton>
    </SwitchWrapper>
  );
};

export default DatatypeSwitch;
