import React, { useState } from "react";
import { Container, Total, Wrapper } from "./style";
import Filter from "../Filter";
import Card from "../Card";
import { useQuery } from "react-query";

const { REACT_APP_BASE_URL: url } = process.env;
const Proporties = () => {
  const [data, setData] = useState([]);

  useQuery(
    "get data",
    () => {
      return fetch(`${url}/v1/houses/list`).then((res) => res.Json());
    },
    {
      onSuccess: (res) => {
        console.log(res, "res");
      },
    }
  );

  return (
    <Container>
      <Filter />
      <div className="title">Proporties</div>
      <div className="description center">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Total className="description">{data.length}Total </Total>
      <Wrapper>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Wrapper>
    </Container>
  );
};

export default Proporties;
