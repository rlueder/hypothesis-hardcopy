import React, { createContext, useState } from "react";

interface ISBNInterface {
  ISBN: string;
  setISBN: React.Dispatch<any>;
}

/**
 * Contexts
 */

export const ISBNContext = createContext<ISBNInterface>({} as ISBNInterface);

/**
 * @name ISBNProvider
 * @param {Object} props
 * @returns {JSX.Element}
 */

export const ISBNProvider = (props: { children: any }): JSX.Element => {
  const { children } = props;
  const [ISBN, setISBN] = useState<string>("");
  return (
    <ISBNContext.Provider value={{ ISBN, setISBN }}>
      {children}
    </ISBNContext.Provider>
  );
};

/**
 * @name Store
 * @param {Object} props
 * @returns {JSX.Element}
 */

const Store = (props: { children: any }): JSX.Element => {
  const { children } = props;
  const providers = [ISBNProvider];
  return (
    <>
      {providers.reduceRight((acc, Provider) => {
        return <Provider>{acc}</Provider>;
      }, children)}
    </>
  );
};

export default Store;
