import type { BookInfo } from "../../../definitions";

type Props = {
  data: BookInfo;
  doi: string;
};

/**
 * @name Info
 * @param {Object} props
 * @returns {JSX.Element}
 */

const Info = (props: Props): JSX.Element => {
  const { data, doi } = props;
  const { authors, description, pageCount, publishedDate, publisher, title } =
    data;

  const renderAuthors = () =>
    authors.map((author, i) => (
      <p key={i}>
        <>by ${author}</>
      </p>
    ));

  return (
    <div className="Book">
      <h1>{title}</h1>
      {renderAuthors()}
      <h4>Summary</h4>
      <p>{description}</p>
      <h4>Publisher</h4>
      <p>
        {publisher}, {publishedDate}
      </p>
      <p>{pageCount} pages</p>
      <h4>ISBN-A</h4>
      <p>
        <a href={`https://dx.doi.org/${doi}`}>{doi}</a>
      </p>
    </div>
  );
};

export default Info;
