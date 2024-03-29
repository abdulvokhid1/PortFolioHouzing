import React from "react";
import Navbar from "../components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { navbar } from "../utils/navbar";
const Root = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route>
          {navbar.map(({ path, Element, id, hidden }) => {
            return hidden && <Route key={id} path={path} element={Element} />;
          })}
        </Route>
        <Route element={<Navbar />}>
          {navbar.map(({ path, Element, id, hidden }) => {
            return !hidden && <Route key={id} path={path} element={Element} />;
          })}
        </Route>
      </Routes>
    </>
  );
};

export default Root;
