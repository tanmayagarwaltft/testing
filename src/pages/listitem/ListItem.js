import React from "react";
import { useParams } from "react-router-dom";

const ListItem = () => {
  const params = useParams();
  console.log(params);
  return <div>{params.name}</div>;
};

export default ListItem;
