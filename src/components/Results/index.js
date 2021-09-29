import { useEffect, useRef, useState } from "react";

import { Annotations } from "../index";
import { Info } from "./components";

import { getDOI } from "../../utils";

import "./styles.scss";

/**
 * @name Results
 * @param props
 * @returns {JSX.Element}
 */

const Results = (props) => {
    const { annotations, data, setAnnotations } = props;

    const section = useRef(undefined);
    const [height, setHeight ] = useState(undefined);

    useEffect(() => {
        setHeight(section?.current?.offsetHeight)
    });

    if(!data) {
        return (
            <div className="Results--empty">
                <p>Search for a book by ISBN-10 or ISBN-13 above.</p>
            </div>
        )
    }

    const { imageLinks, industryIdentifiers, title } = data;

    const ISBN = industryIdentifiers[0].identifier;
    const DOI = getDOI(ISBN);

    const src = imageLinks?.smallThumbnail?.replace("&edge=curl", "").replace("&zoom=5", "&zoom=1");

    const calcHeight = () => `${height / 2}px`;

    return (
        <div className="Results">
            <div className="Results__item">
                <aside>
                    <img src={src} alt={title} />
                </aside>
                <section ref={section}>
                    <Info data={data} doi={DOI} />
                    <Annotations data={annotations} doi={DOI} setAnnotations={setAnnotations} style={{ height: calcHeight() }} />
                </section>
            </div>
        </div>
    )
};

export default Results;
