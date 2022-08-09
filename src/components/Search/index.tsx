import { useContext } from "react";

import {
  Formik,
  Form,
  Field,
  // ErrorMessage
} from "formik";

import { Link } from "react-router-dom";

import { validate } from "../../utils/beautify-isbn";

import type { FormErrors } from "../../definitions";

import { ISBNContext } from "../../store";

import "./styles.scss";

/**
 * @name Search
 * @returns {JSX.Element}
 */

const Search = (): JSX.Element => {
  const { setISBN } = useContext(ISBNContext);

  const validateValues = (values: { isbn: string }) => {
    const errors: FormErrors = {};
    if (!values.isbn) {
      errors.isbn = "ISBN is required";
    } else if (!validate(values.isbn)) {
      errors.isbn = "Must be a valid ISBN-10 or ISBN-13";
    }
    return errors;
  };

  return (
    <div className="Search">
      <Formik
        initialValues={{ isbn: "" }}
        validate={(values) => validateValues(values)}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            setISBN(values.isbn);
          }, 400);
        }}
      >
        {(props) => {
          const { isSubmitting } = props;
          return (
            <Form>
              <Field name="isbn" placeholder="Search for ISBN..." type="tel" />
              <button disabled={isSubmitting} type="submit">
                <span className="material-icons">search</span>
              </button>
              <button disabled={isSubmitting} type="submit">
                <Link to="/scanner">
                  <span className="material-icons">qr_code</span>
                </Link>
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Search;
