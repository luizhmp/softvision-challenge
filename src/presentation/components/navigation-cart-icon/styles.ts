import styled from 'styled-components/native';

export const TestView = styled.View`
  background-color: red;
  padding-right: ${(props) => props.theme.metrics.doubleSpace};
`;
