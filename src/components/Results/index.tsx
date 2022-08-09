import { useEffect, useRef, useState } from "react";

import { Annotations } from "../index";
import { Info } from "./components";

import { getDOI } from "../../utils";

import type { BookInfo } from "../../definitions";

import "./styles.scss";

type Props = {
  data: BookInfo | null;
};

/**
 * @name Results
 * @param props
 * @returns {JSX.Element}
 */

const Results = (props: Props): JSX.Element => {
  const { data } = props;

  const section = useRef<HTMLElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (section.current) {
      setHeight(section.current.offsetHeight);
    }
  });

  if (!data) {
    return (
      <div className="Results--empty">
        <p>Search for a book by ISBN-10 or ISBN-13 above.</p>
      </div>
    );
  }

  const { imageLinks, industryIdentifiers, title } = data;

  const ISBN = industryIdentifiers && industryIdentifiers[0].identifier;
  const DOI = getDOI(ISBN) || "";

  const calcHeight = (height: number) => `${height / 2}px`;

  return (
    <div className="Results">
      <div className="Results__item">
        <aside>
          <img src={imageLinks.smallThumbnail} alt={title} />
        </aside>
        <section ref={section}>
          <Info data={data} doi={DOI} />
          <Annotations doi={DOI} style={{ height: calcHeight(height) }} />
        </section>
      </div>
    </div>
  );
};

export default Results;
