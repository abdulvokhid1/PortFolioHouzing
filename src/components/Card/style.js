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
  width: 380px;
  height: 430px;
  min-width: 280px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
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
export { Container, Img, InfoWrapper, Info, Icons, Footer };
