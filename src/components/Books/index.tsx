import { useContext } from "react";

import { Header } from "../../components";
import { SearchContext } from "../../store";

import "./styles.scss";

/**
 * @name Books
 * @returns {JSX.Element}
 */

const Books = (): JSX.Element => {
  const { results } = useContext(SearchContext);
  return (
    <div className="Books">
      <Header />
      <section>
        {!results.length ? (
          <div className="Books--empty">
            <p>Nothing to show.</p>
          </div>
        ) : (
          results.map((book, index) => <div>{book.title}</div>)
        )}
      </section>
    </div>
  );
};

export default Books;
