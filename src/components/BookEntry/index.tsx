import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Header, Search } from "../../components";
import { Annotations } from "./components";

import { SearchContext } from "../../store";
import { getBook, getDOI } from "../../utils";

import type { BookInfo } from "../../definitions";

import "./styles.scss";

/**
 * @name BookEntry
 * @returns {JSX.Element}
 */

const BookEntry = (): JSX.Element => {
  const [data, setData] = useState<BookInfo | null>(null);

  const { results, setResults } = useContext(SearchContext);

  const location = useLocation();
  const isbn = location.pathname.split("/books/").filter((n) => n)[0];

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBook(isbn);
        setResults([...results, response]);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBook();
  }, []);

  useEffect(() => {
    // filter book from all results that matches ISBN
    const book = results.filter(
      (el) => el.industryIdentifiers[0].identifier === isbn
    )[0];
    setData(book);
  }, [results]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const {
    authors,
    description,
    imageLinks,
    industryIdentifiers,
    pageCount,
    publishedDate,
    publisher,
    title,
  } = data;

  const ISBN = industryIdentifiers && industryIdentifiers[0].identifier;
  const DOI = getDOI(ISBN) || "";
  const uri = `https://dx.doi.org/${DOI}`;

  return (
    <div className="BookEntry">
      <Header>
        <Search />
      </Header>
      <section className="BookEntry__section">
        <aside>
          <img src={imageLinks.smallThumbnail} alt={title} />
          <h4>Publisher</h4>
          <p>
            {publisher}, {publishedDate}
          </p>
          <p>{pageCount} pages</p>
          <h4>ISBN-A</h4>
          <p>
            <a href={uri}>{DOI}</a>
          </p>
        </aside>
        <div>
          <section className="BookEntry__details">
            <h1>{title}</h1>
            {authors.map((author, i) => (
              <p key={i}>
                <>by {author}</>
              </p>
            ))}
            <h4>Summary</h4>
            <p>{description}</p>
          </section>
          <Annotations doi={DOI} title={title} />
        </div>
      </section>
    </div>
  );
};

export default BookEntry;
