import React, { memo, forwardRef } from "react";
import { Container, IconWrapper, Icon } from "./style";

export const Input = forwardRef(
  (
    {
      children,
      type,
      onClick,
      width,
      height,
      mr,
      ml,
      mb,
      mt,
      pl,
      onChange,
      placeholder,
      name,
      defaultValue,
    },
    ref
  ) => {
    return (
      <IconWrapper ml={ml} mr={mr} mt={mt} mb={mb}>
        <Icon>{children}</Icon>
        <Container
          mr={mr}
          mb={mb}
          ml={ml}
          mt={mt}
          onClick={onClick}
          type={type}
          width={width}
          height={height}
          pl={pl}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          defaultValue={defaultValue}
        ></Container>
      </IconWrapper>
    );
  }
);

export default memo(Input);
