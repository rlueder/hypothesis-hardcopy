import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Header } from "../../components";
import { Annotations } from "./components";

import { SearchContext } from "../../store";
import { getDOI } from "../../utils";

import type { BookInfo } from "../../definitions";

/**
 * @name BookEntry
 * @returns {JSX.Element}
 */

const BookEntry = (): JSX.Element => {
  const [data, setData] = useState<BookInfo | null>(null);

  const { results } = useContext(SearchContext);

  const location = useLocation();

  useEffect(() => {
    const isbn = location.pathname.split("/books/").filter((n) => n)[0];

    // filter book from all results that matches ISBN
    const book = results.filter(
      (el) => el.industryIdentifiers[0].identifier === isbn
    )[0];

    setData(book);
  }, []);

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

  return (
    <div className="BookEntry">
      <Header />
      <aside>
        <img src={imageLinks.smallThumbnail} alt={title} />
      </aside>
      <section>
        <h1>{title}</h1>
        {authors.map((author, i) => (
          <p key={i}>
            <>by {author}</>
          </p>
        ))}
        <h4>Summary</h4>
        <p>{description}</p>
        <h4>Publisher</h4>
        <p>
          {publisher}, {publishedDate}
        </p>
        <p>{pageCount} pages</p>
        <h4>ISBN-A</h4>
        <p>
          <a href={`https://dx.doi.org/${DOI}`}>{DOI}</a>
        </p>
        <Annotations doi={DOI} title={title} />
      </section>
    </div>
  );
};

export default BookEntry;
