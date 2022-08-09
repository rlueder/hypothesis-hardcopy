import { useContext, useEffect, useState } from "react";

import { isEmpty } from "lodash";

import { Header, Results, Scanner, Search } from "./components";

import { ISBNContext } from "./store";
import { getBook } from "./utils";

import type { BookInfo } from "./definitions";

import "./App.scss";

/**
 * @name App
 * @returns {JSX.Element}
 */

const App = (): JSX.Element => {
  const [data, setData] = useState<BookInfo | null>(null);
  const { ISBN, setISBN } = useContext(ISBNContext);

  useEffect(() => {
    if (ISBN) {
      getBook(ISBN).then((response: BookInfo) => setData(response));
    }
  }, [ISBN]);

  if (data && isEmpty(data)) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Header>
        <Search />
      </Header>
      <Results data={data} />
      <footer />
    </div>
  );
};

export default App;
