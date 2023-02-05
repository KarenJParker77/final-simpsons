import React from "react";
import Characters from "./Characters";
import Search from "./Search";

const Interface = () => {
  return (
    <>
      <div className="container">
        <img src="simpsons.png" alt="The Simpsons family" className="logo" />
        <h1>Hilariously hair-brained Simpsons quotes</h1>
      </div>
      <Search />
      <Characters />
    </>
  );
};

export default Interface;
