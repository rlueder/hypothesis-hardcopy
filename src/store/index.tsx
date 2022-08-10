import React, { createContext, useState } from "react";

import type { BookInfo } from "../definitions";

interface SearchInterface {
  results: BookInfo[];
  setResults: React.Dispatch<any>;
}

/**
 * Contexts
 */

export const SearchContext = createContext<SearchInterface>(
  {} as SearchInterface
);

/**
 * @name SearchProvider
 * @param {Object} props
 * @returns {JSX.Element}
 */

export const SearchProvider = (props: { children: any }): JSX.Element => {
  const { children } = props;
  const [results, setResults] = useState<BookInfo[]>([]);
  return (
    <SearchContext.Provider value={{ results, setResults }}>
      {children}
    </SearchContext.Provider>
  );
};

/**
 * @name Store
 * @param {Object} props
 * @returns {JSX.Element}
 */

const Store = (props: { children: any }): JSX.Element => {
  const { children } = props;
  const providers = [SearchProvider];
  return (
    <>
      {providers.reduceRight((acc, Provider) => {
        return <Provider>{acc}</Provider>;
      }, children)}
    </>
  );
};

export default Store;
