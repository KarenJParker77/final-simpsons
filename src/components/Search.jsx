import React from "react";
import { useDispatch } from "react-redux";
import { ADD_CHARACTER, SET_USER_INPUT } from "../redux/types";

const Search = () => {
  const dispatch = useDispatch();

  return (
    <>
      {/* <div
        onInput={(e) => {
          dispatch({
            type: SET_USER_INPUT,
            payload: { name: e.target.name, value: e.target.value },
          });
        }}
      >
        <input type="text" name="newCharacterInput" />
        <input type="text" name="newQuoteInput" />
        <button
          onClick={() => {
            dispatch({ type: ADD_CHARACTER });
          }}
        >
          Add
        </button>
      </div> */}
      <div
        onInput={(e) => {
          dispatch({
            type: SET_USER_INPUT,
            payload: { name: e.target.name, value: e.target.value },
          });
        }}
      >
        <input type="text" name="searchInput" placeholder="Search" />
      </div>
    </>
  );
};

export default Search;
