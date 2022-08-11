import { useEffect, useState } from "react";

import {
  Formik,
  Form,
  Field,
  // ErrorMessage
} from "formik";

import { format } from "date-fns";

import { createAnnotation, getAnnotations } from "../../../utils";

import type { Annotation } from "../../../definitions";

type Props = {
  doi: string;
  title: string;
};

/**
 * @name Annotations
 * @param props
 * @returns {JSX.Element}
 */

const Annotations = (props: Props): JSX.Element => {
  const { doi, title } = props;

  const [data, setData] = useState<Annotation[]>([]);

  useEffect(() => {
    getAnnotations(doi).then((response: Annotation[]) => setData(response));
  }, [doi]);

  const renderForm = () => {
    return (
      <Formik
        initialValues={{ text: "" }}
        validate={(values) => {
          const errors: Object = {};
          if (!values.text) {
            // @ts-ignore
            errors.text = "Annotation can't be empty.";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            createAnnotation(doi, title, values.text).then(
              (response: { status: number }) => {
                if (response.status === 200) {
                  getAnnotations(doi).then((response: Annotation[]) =>
                    setData(response)
                  );
                }
              }
            );
          }, 400);
        }}
      >
        {(props) => {
          const { isSubmitting } = props;
          return (
            <Form>
              <Field name="text" placeholder="Add your comment..." />
              {/*<ErrorMessage name="text" component="div" />*/}
              <button type="submit" disabled={isSubmitting}>
                Add Annotation
              </button>
            </Form>
          );
        }}
      </Formik>
    );
  };

  if (!data.length) {
    return (
      <div className="Annotations">
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
    );
  }

  return (
    <div className="Annotations">
      <h2>Annotations</h2>
      <div
        className="Annotations__wrapper"
        // style={{ height: `calc(${style.height} - 2rem)` }}
      >
        <ul className="Annotations__list">
          {data?.map((annotation: Annotation, index) => {
            const { created, text, user } = annotation;

            // const selector = target[0].selector;
            // const highlight = selector[selector.length - 1].exact;

            const author = user.split("acct:")[1];

            return (
              <li className="Annotations__item" key={index}>
                <header>
                  <p style={{ fontWeight: "bolder" }}>{author}</p>
                  <p>{format(new Date(created), "MMM dd, yyyy")}</p>
                </header>
                <section>
                  <p>{text}</p>
                </section>
                <footer />
              </li>
            );
          })}
        </ul>
      </div>
      <footer>
        <h4>Add an Annotation</h4>
        {renderForm()}
      </footer>
    </div>
  );
};

export default Annotations;
