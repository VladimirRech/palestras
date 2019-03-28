import React, { Fragment } from "react";
import { TituloStyled, SubTituloStyled } from "./styles";

const Titulo = props => {
  return (
    <Fragment>
      <TituloStyled {...props}>{props.children}</TituloStyled>
      <SubTituloStyled color="pink">{props.subTitulo}</SubTituloStyled>
    </Fragment>
  );
};

export default Titulo;
