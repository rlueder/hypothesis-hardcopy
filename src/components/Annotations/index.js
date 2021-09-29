import { Formik, Form, Field, ErrorMessage } from "formik";
import { format } from "date-fns";

import {createAnnotation, getAnnotations} from "../../utils";

import "./styles.scss";

/**
 * @name Annotations
 * @param props
 * @returns {JSX.Element}
 */

const Annotations = (props) => {
    const { data, doi, setAnnotations, style } = props;

    const renderForm = () => {
        return (
            <Formik
                initialValues={{ annotation: ""}}
                validate={values => {
                    const errors = {};
                    if (!values.annotation) {
                        errors.annotation = "Annotation can't be empty.";
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        createAnnotation(doi, values.annotation).then((response) => {
                            if(response.status === 200) {
                                getAnnotations(doi).then(response => setAnnotations(response.rows))
                            }
                        });
                    }, 400);
                }}
            >
                {(props) => {
                    const { isSubmitting } = props;
                    return (
                        <Form>
                            <Field name="annotation" placeholder="Add your comment..." />
                            {/*<ErrorMessage name="annotation" component="div" />*/}
                            <button type="submit" disabled={isSubmitting}>
                                Add Annotation
                            </button>
                        </Form>
                    )
                }}
            </Formik>
        )
    };

    if(!data.length) {
        return (
            <div className="Annotations" style={{...style}}>
                <h2>Annotations</h2>
                <div className="Annotations__wrapper">
                    <div>
                        <p>There are no annotations for this item.</p>
                        <p>Please log in to create annotations or highlights.</p>
                    </div>
                </div>
                <footer>
                    <h4>Add an Annotation</h4>
                    {renderForm()}
                </footer>
            </div>
        )
    }

    return (
        <div className="Annotations" style={{...style}}>
            <h2>Annotations</h2>
            <div className="Annotations__wrapper" style={{ height: `calc(${style.height} - 2rem)`}}>
                <ul className="Annotations__list">
                    {data?.map((annotation, i) => {
                        const {
                            created,
                            // permissions,
                            // target,
                            text,
                            // uri,
                            user } = annotation;

                        // const selector = target[0].selector;
                        // const highlight = selector[selector.length - 1].exact;

                        const author = user.split("acct:")[1];

                        // TODO implement Edit, Delete, Reply and Share
                        //  actions inside of footer

                        return (
                            <li className="Annotations__item" key={i}>
                                <header>
                                    <p style={{ fontWeight: "bolder"}}>{author}</p>
                                    <p>{format(new Date(created), "MMM dd, yyyy")}</p>
                                </header>
                                <section>
                                    <p>{text}</p>
                                </section>
                                <footer></footer>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <footer>
                <h4>Add an Annotation</h4>
                {renderForm()}
            </footer>
        </div>
    )
}

export default Annotations;