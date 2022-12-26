import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "../pages/contact/Contact";
import NotFound from "../pages/error/NotFound";
import Home from "../pages/home/Home";
import List from "../pages/list/List";
import ListItem from "../pages/listitem/ListItem";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/list" element={<List />} />
      <Route path="/listitem/:name" element={<ListItem />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesComponent;
