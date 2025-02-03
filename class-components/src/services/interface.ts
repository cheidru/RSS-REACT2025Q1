import { ReactNode } from "react";

export type searchData = {
  title: string;
  param1: string;
  param2: string;
  param3: string;
  param4: string;
}

export type Props = {
  searchResult?: searchData[];
  searchString?: string;
  handleSearchResultChange?: (data: searchData[], searchStr: string) => void;
}

export type ErrorProps = {
  children: ReactNode;
}

export type ErrorState = {
  hasError: boolean
}