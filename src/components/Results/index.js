import { useEffect, useState } from "react";

import { getAnnotations, getDOI } from "../../utils";

/**
 * @name Results
 * @param props
 * @returns {JSX.Element}
 */

const Results = (props) => {
    const { data, setAnnotations } = props;

    const [active, setActive ] = useState("");

    useEffect(() => {
        if(active) {
            getAnnotations(active).then(response => setAnnotations(response.rows))
        }
    }, [active, setAnnotations]);

    if(!data) {
        return (
            <div className="Results">
                <p>Search for a book by ISBN above.</p>
            </div>
        )
    }

    const { authors, description, imageLinks, industryIdentifiers, pageCount, publishedDate, publisher, title } = data;

    const src = imageLinks?.smallThumbnail?.replace("&edge=curl", "");

    const ISBN = industryIdentifiers[0].identifier;
    const DOI = getDOI(ISBN);

    const renderAuthors = () => authors.map((author, i) => <p key={i}>{author}</p>);

    return (
        <div className="Results">
            <div className="Results__item" onClick={() => setActive(DOI)}>
                <h1>{title}</h1>
                <img src={src} alt={title} />
                <div>
                    by {renderAuthors()}
                </div>
                <p>{description}</p>
                <p>{publisher}, {publishedDate}</p>
                <p>{pageCount} pages</p>
                <p>
                    <a href={`http://dx.doi.org/${DOI}`}>
                        {DOI}
                    </a>
                </p>
            </div>
        </div>
    )
};

export default Results;
