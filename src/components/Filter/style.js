import styled from "styled-components";
import { ReactComponent as home } from "../../assets/icons/home.svg";
import { ReactComponent as setting } from "../../assets/icons/setting.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 10px 0;
`;
const Wrapper = styled.div`
  display: flex;
  width: 1440px;
`;

const IconHome = styled(home)`
  margin-right: 630px;
  margin-top: 3px;
`;
const IconSearch = styled(search)`
  margin-right: 8px;
`;
const IconSetting = styled(setting)`
  margin-right: 8px;
`;
const Advanced = styled.div`
  width: "fit-content";
  height: "fit-content";
  background: #ffffff;
  border-radius: 5px;
  padding: 10px;
`;
Advanced.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
`;
const Section = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: flex-end;
  gap: 20px;
`;
export {
  Container,
  Wrapper,
  IconHome,
  IconSearch,
  IconSetting,
  Section,
  Advanced,
};
