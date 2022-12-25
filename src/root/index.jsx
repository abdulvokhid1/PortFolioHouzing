import React from "react";
import Navbar from "../components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { navbar } from "../utils/navbar";
import Generic from "../pages/Generic";

const Root = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route element={<Navbar />}>
          {navbar.map(({ path, Element, id }) => {
            return <Route key={id} path={path} element={Element} />;
          })}
        </Route>
      </Routes>
    </>
  );
};

export default Root;
