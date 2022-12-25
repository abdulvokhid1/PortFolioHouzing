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

const Filter = () => {
  const advancedSearch = (
    <Advanced>
      <Advanced.Title>Address</Advanced.Title>
      <Section>
        <Input mr={20} placeholder={"Country"}></Input>
        <Input mr={20} placeholder={"Region"}></Input>
        <Input mr={20} placeholder={"City"}></Input>
        <Input mr={20} placeholder={"Zip Code"}></Input>
      </Section>
      <Advanced.Title>Apartment Info</Advanced.Title>
      <Section>
        <Input mr={20} placeholder={"Rooms"}></Input>
        <Input mr={20} placeholder={"Size"}></Input>
        <Input mr={20} placeholder={"Sort"}></Input>
      </Section>
      <Advanced.Title>Price</Advanced.Title>
      <Section>
        <Input mr={20} placeholder={"Min price"}></Input>
        <Input mr={20} placeholder={"Max price"}></Input>
      </Section>
      <Section>
        <Button width="131px" ml={20} type="secondary">
          Cancel
        </Button>
        <Button width="131px" ml={20} type="primary">
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
