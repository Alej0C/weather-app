import styled from "styled-components";

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const City = styled.p`
  font-size: 32px;
  font-weight: bold;
`;

export const WeatherDescription = styled.p`
  font-size: 18px;
`;

export const WeatherIcon = styled.img`
  width: 80px;
  height: 80px;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Temperature = styled.p`
  font-size: 48px;
  font-weight: bold;
`;

export const DetailsContainer = styled.div`
  margin-top: 20px;
  width: 100%;
`;

export const ParameterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid black;
  padding: 10px 0;
`;

export const ParameterLabel = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const ParameterValue = styled.span`
  font-size: 16px;
`;
