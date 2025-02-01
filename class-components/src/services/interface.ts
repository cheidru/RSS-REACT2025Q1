// import { object } from "prop-types";
// import React from "react";

export interface SearchProps {
  searchResult?: object[];
  handleSearchResultChange?: () => object;
}

export type searchData = {
  title: string;
  param1: string;
  param2: string;
  param3: string;
  param4: string;
  //param5?: string[];
}

export type Props = {
  searchResult?: searchData[];
  searchString?: string;
  handleSearchResultChange?: (data:[], searchStr: string) => void;
}