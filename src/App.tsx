import styled from "styled-components";
import "./App.css";
import WeatherWidget from "./components/WeatherWidget/WeatherWidget";

const StyledDiv = styled.div`
  width: 100%;
`;

function App() {
  return (
    <StyledDiv>
      <WeatherWidget />
    </StyledDiv>
  );
}

export default App;
