import styled from 'styled-components';

export const CircleShape = styled.div`
  position: relative;
  background-image: linear-gradient(${(props) => `${props.deg}, ${props.primary}, ${props.secondary}`});
  border-radius: 9999px;
  z-index: 1;
  height: 100px;
  width: 100px;
  ${(props) => props};
`;

export default CircleShape;
