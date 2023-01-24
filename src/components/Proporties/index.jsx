import React, { useState } from "react";
import { Container, Total, Wrapper } from "./style";
import Filter from "../Filter";
import Card from "../Card";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;
const Proporties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  // console.log(location, "log");

  useQuery(
    ["get data", search],
    () => {
      return fetch(`${url}/api/v1/houses/list${search}`).then((res) =>
        res.json()
      );
    },
    {
      onSuccess: (res) => {
        setData(res?.data);
      },
    }
  );
  console.log(data, "res");
  return (
    <Container>
      <Filter />
      <div className="title">Proporties</div>
      <div className="description center">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Total className="description">{data?.length || []}Total </Total>
      <Wrapper>
        {data.map((value) => {
          return <Card key={value.id} info={value} />;
        })}
      </Wrapper>
    </Container>
  );
};

export default Proporties;
