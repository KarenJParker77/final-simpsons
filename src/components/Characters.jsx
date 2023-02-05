import React, { useState } from "react";
import { useSelector } from "react-redux";
import Character from "./Character";

const Characters = () => {
  const characters = useSelector((state) => state.characters);
  const searchInput = useSelector((state) => state.searchInput);

  //make a copy of the original state
  let copy = [...characters];

  let count = 0;
  characters.forEach((item) => {
    if (item.liked) {
      count++;
    }
  });

  if (searchInput) {
    copy = copy.filter((item) => {
      return item.character
        .toLowerCase()
        .includes(searchInput.toLowerCase().trim());
    });
  }

  return (
    <>
      <h1>Number of likes: {count}</h1>

      {copy.map((character, index) => (
        <Character key={index} character={character} index={index} />
      ))}
    </>
  );
};

export default Characters;
