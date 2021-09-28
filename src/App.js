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

  useEffect(() => {
      getBook(9780143111603).then((response) => setData(response));
  }, []);

  if(data && !Object.keys(data).length) {
      return (
          <div>Loading...</div>
      )
  }

  return (
    <div className="App">
        <Header>
            <Search />
        </Header>
        <Results data={data} setAnnotations={setAnnotations} />
        <Annotations data={annotations} />
    </div>
  );
}

export default App;
