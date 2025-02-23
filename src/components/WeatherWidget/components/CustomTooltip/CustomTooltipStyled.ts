import styled from "styled-components";

export const TooltipWrapper = styled.div`
  display: flex;
  padding: 5px 20px;
  background: rgba(0, 0, 0, 0.45);
  border-radius: 20px;
  flex-direction: column;
  font-size: 20px;
  align-items: center;
`;

export const MetricsContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const MetricWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  align-items: center;
  grid-area: "metric";
`;

export const Image = styled.img`
  width: 35px;
`;
