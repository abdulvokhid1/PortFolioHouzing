import React, { memo } from "react";
import { Container } from "./style";

export const Button = ({
  children,
  type,
  onClick,
  width,
  height,
  mr,
  ml,
  mb,
  mt,
}) => {
  return (
    <Container
      mr={mr}
      mb={mb}
      ml={ml}
      mt={mt}
      onClick={onClick}
      type={type}
      width={width}
      height={height}
    >
      {children}
    </Container>
  );
};

export default memo(Button);
