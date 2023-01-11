import { Popover } from "antd";
import React from "react";
import {
  Advanced,
  Container,
  IconHome,
  IconSearch,
  IconSetting,
  Section,
  Wrapper,
} from "./style";
import Button from "../Generic/Button";
import Input from "../Generic/Input";
import { useLocation, useNavigate } from "react-router-dom";
const Filter = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onChange = ({ target }) => {
    const { value, name } = target;
    navigate(`${pathname}?${name}=${value}`);
  };
  const advancedSearch = (
    <Advanced>
      <Advanced.Title>Address</Advanced.Title>
      <Section>
        <Input placeholder={"Country"}></Input>
        <Input placeholder={"Region"}></Input>
        <Input onChange={onChange} name="city" placeholder={"City"}></Input>
        <Input placeholder={"Zip Code"}></Input>
      </Section>
      <Advanced.Title>Apartment Info</Advanced.Title>
      <Section>
        <Input placeholder={"Rooms"}></Input>
        <Input placeholder={"Size"}></Input>
        <Input placeholder={"Sort"}></Input>
      </Section>
      <Advanced.Title>Price</Advanced.Title>
      <Section>
        <Input placeholder={"Min price"}></Input>
        <Input placeholder={"Max price"}></Input>
      </Section>
      <Section>
        <Button width="131px" type="secondary">
          Cancel
        </Button>
        <Button width="131px" type="primary">
          Search
        </Button>
      </Section>
    </Advanced>
  );
  return (
    <Container>
      <Wrapper>
        <Input
          pl="42px"
          placeholder="Enter an address, neighborhood, city, or ZIP code"
        >
          <IconHome />
        </Input>
        <Popover
          placement="bottomRight"
          content={advancedSearch}
          trigger={"click"}
        >
          <Button width="131px" ml={20} type="secondary">
            <IconSetting />
            Advanced
          </Button>
        </Popover>
        <Button width="131px" ml={20} type="primary">
          <IconSearch />
          Search
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Filter;
