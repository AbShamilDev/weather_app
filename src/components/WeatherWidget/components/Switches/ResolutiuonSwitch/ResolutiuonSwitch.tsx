import { SwitchButton, SwitchWrapper } from "../SwitchStyled";

const ResolutiuonSwitch = ({
  onChange,
  value,
}: {
  onChange: (value: number) => void;
  value: number;
}) => {
  return (
    <SwitchWrapper>
      <SwitchButton onClick={() => onChange(1)} isActive={value === 1}>
        3 часа
      </SwitchButton>
      <SwitchButton onClick={() => onChange(2)} isActive={value === 2}>
        6 часов
      </SwitchButton>
      <SwitchButton onClick={() => onChange(4)} isActive={value === 4}>
        12 часов
      </SwitchButton>
      <SwitchButton onClick={() => onChange(8)} isActive={value === 8} isLast>
        День
      </SwitchButton>
    </SwitchWrapper>
  );
};

export default ResolutiuonSwitch;
