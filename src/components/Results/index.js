
import { Annotations } from "../index";

import { getDOI } from "../../utils";

import "./styles.scss";

/**
 * @name Results
 * @param props
 * @returns {JSX.Element}
 */

const Results = (props) => {
    const { annotations, data } = props;

    if(!data) {
        return (
            <div className="Results--empty">
                <p>Search for a book by ISBN above.</p>
            </div>
        )
    }

    const { authors, description, imageLinks, industryIdentifiers, pageCount, publishedDate, publisher, title } = data;

    const src = imageLinks?.smallThumbnail?.replace("&edge=curl", "").replace("&zoom=5", "&zoom=1");

    const ISBN = industryIdentifiers[0].identifier;
    const DOI = getDOI(ISBN);

    const renderAuthors = () => authors.map((author, i) => <p key={i}>by {author}</p>);

    return (
        <div className="Results">
            <div className="Results__item">
                <aside>
                    <img src={src} alt={title} />
                </aside>
                <section>
                    <div>
                        <h1>{title}</h1>
                        {renderAuthors()}
                        <h4>Summary</h4>
                        <p>{description}</p>
                        <h4>Publisher</h4>
                        <p>{publisher}, {publishedDate}</p>
                        <p>{pageCount} pages</p>
                        <h4>ISBN-A</h4>
                        <p>
                            <a href={`http://dx.doi.org/${DOI}`}>
                                {DOI}
                            </a>
                        </p>
                    </div>
                    <Annotations data={annotations} doi={DOI} />
                </section>
            </div>
        </div>
    )
};

export default Results;
