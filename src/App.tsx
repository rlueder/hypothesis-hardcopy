import { useEffect, useState } from "react";

import { Header, Results, Search } from "./components";
import { getBook } from "./utils";

import type { BookInfo } from "./definitions";

import "./App.scss";

/**
 * @name App
 * @returns {JSX.Element}
 */

const App = (): JSX.Element => {
  const [data, setData] = useState<BookInfo | null>(null);
  const [ISBN, setISBN] = useState();

  useEffect(() => {
    if (ISBN) {
      getBook(ISBN).then((response: BookInfo) => {
        setData(response);
      });
    }
  }, [ISBN]);

  if (data && !Object.keys(data).length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Header>
        <Search setISBN={setISBN} />
      </Header>
      <Results data={data} />
      <footer />
    </div>
  );
};

export default App;
