import styled from "styled-components";

const TituloStyled = styled.h2`
  border: 1px solid pink;
  color: ${({ color }) => color};
`;

const SubTituloStyled = styled(TituloStyled)`
  font-size: 10px;
`;

export { TituloStyled, SubTituloStyled };
