import styled from "styled-components";

export const LegendWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CityContainer = styled.div<{ color: string }>`
  display: flex;
  color: ${(props) => props.color};
`;
