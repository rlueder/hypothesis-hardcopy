import { useEffect, useState } from "react";

import { Header, Results, Search } from "./components";

import "./App.scss";

import {getAnnotations, getBook, getDOI} from "./utils";

/**
 * @name App
 * @returns {JSX.Element}
 */

// TODO
// - use https://hyp.is/ URL shortener to "host" DOI links if they don't
// exist yet?
// - preserve search status when refreshing, use hash URL with ISBN

const App = () => {

    const [annotations, setAnnotations] = useState([]);
    const [data,setData] = useState(null);
    const [ISBN, setISBN] = useState("");

    useEffect(() => {
      if(ISBN) {
          getBook(ISBN).then((response) => {
              const DOI = getDOI(ISBN);
              setData(response);
              getAnnotations(DOI).then(response => setAnnotations(response.rows))
          });
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
        <Results data={data} annotations={annotations} setAnnotations={setAnnotations} />
        <footer />
    </div>
  );
}

export default App;
