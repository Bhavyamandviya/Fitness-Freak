import React, { memo } from "react";
import isEqual from "react-fast-compare";
import AppProvider from "./AppProvider";
import Routes from "./Routes";

const Index = () => {
  return (
    <>
      <Routes />
    </>
  );
};

export default memo(Index, isEqual);
