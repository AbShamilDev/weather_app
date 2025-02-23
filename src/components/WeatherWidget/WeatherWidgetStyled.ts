import styled from "styled-components";

export const WidgetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
  margin: 0 auto;
  width: 80%;
  font-size: 20px;
  border-radius: 20px;
  background-color: rgba(26, 26, 26, 0.8);
  box-shadow: 10px 10px 20px 10px rgba(0, 0, 0, 0.38);
`;

export const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 50px;
  width: 100%;
`;

export const SwithesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  align-items: end;
  gap: 10px;
`;

export const Input = styled.input`
  font-size: inherit;
  margin-right: 15px;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
`;

export const Button = styled.button`
  border: none;
  font-size: inherit;
  padding: 10px 15px;
  border-radius: 30px;
`;
