import styled from "styled-components";
import { Wrapper } from "../../Filter/style";

const getType = (type) => {
  switch (type) {
    case "secondary":
      return {
        border: "1px solid #e6e9ec",
        color: "#0d263b",
      };
    case "primary":
      return {
        background: "#0061df",
        border: "none",
        color: "#ffffff",
      };

    default:
      return {
        border: "1px solid #e6e9ec",
        color: "#ffffff",
      };
  }
};
const Container = styled.input`
  display: flex;
  height: ${({ height }) => height || "44px"};
  width: ${({ width }) => width || "100%"};
  border-radius: 2px;
  padding-left: ${({ pl }) => pl || "15px"};
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  font-size: 14px;
  color: #0d263b;
  border: 1px solid #e6e9ec;
`;
const IconWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
`;
const Icon = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 30%;
`;
export { Container, IconWrapper, Icon };
