// import { object } from "prop-types";
// import React from "react";

export interface SearchProps {
  searchResult?: object[];
  handleSearchResultChange?: () => object;
}

export type searchData = {
  name?: string;
  model?: string;
  manufacturer?: string;
  cost_in_credits?: number;
  cargo_capacity?: number;
  films?: string[];
}

export type Props = {
  searchResult?: searchData[];
  handleSearchResultChange?: (data:[]) => void;
}