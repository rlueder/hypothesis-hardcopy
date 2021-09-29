import { useEffect, useState } from "react";

import { Annotations, Header, Results, Search } from "./components";

import "./App.scss";

import { getBook, getWorks } from "./utils";

/**
 * @name App
 * @returns {JSX.Element}
 */

const App = () => {

    const [annotations, setAnnotations] = useState([]);
    const [data,setData] = useState(null);
    const [ISBN, setISBN] = useState("");

    useEffect(() => {
      if(ISBN) {
          getBook(ISBN).then((response) => setData(response));
      }
  }, [ISBN]);

  if(data && !Object.keys(data).length) {
      return (
          <div>Loading...</div>
      )
  }

  return (
    <div className="App">
        <Header>
            <Search setISBN={setISBN} />
        </Header>
        <Results data={data} setAnnotations={setAnnotations} />
        <Annotations data={annotations} />
    </div>
  );
}

export default App;
