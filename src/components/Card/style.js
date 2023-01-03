import styled from "styled-components";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/garage.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";
import { ReactComponent as heart } from "../../assets/icons/heart.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 10;
  max-width: 380px;
  height: 430px;
  min-width: 280px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  margin-right: ${({ mr }) => mr && `${mr}px`};
`;
const Img = styled.img`
  width: 100%;
  min-height: 220px;
  max-height: 220px;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  padding-bottom: 0;
  border: 1px solid #e6e9ec;
  position: relative;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
`;
Info.Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Icons = styled.div``;
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)`
  cursor: pointer;
  /* border-radius: 20px; */
  margin-left: 20px;
  width: 35px;
  height: 35px;
  padding: 10px;
  .active {
    transform: scale(0.97);
  }
`;
Icons.Heart = styled(heart)`
  background: #f6f8f9;
  border-radius: 60px;
  margin-left: 20px;
  width: 35px;
  height: 35px;
  padding: 10px;
  cursor: pointer;
  .active {
    transform: scale(0.97);
  }
`;
const Footer = styled.div`
  display: flex;
  border-top: 1px solid #e6e9ec;
  align-items: center;
  height: 100%;
  padding: 0 20px;
`;
const User = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  right: 20px;
  top: -23px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
  overflow: hidden;
`;
User.Img = styled.img`
  width: 43px;
  height: 43px;
  object-fit: cover;
`;
export { Container, Img, InfoWrapper, Info, Icons, Footer, User };
