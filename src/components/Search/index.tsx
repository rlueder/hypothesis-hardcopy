import { useContext, useEffect } from "react";

import {
  Formik,
  Form,
  Field,
  // ErrorMessage
} from "formik";

import { Link, useNavigate } from "react-router-dom";

import { validate } from "../../utils/beautify-isbn";

import type { FormErrors } from "../../definitions";

import { SearchContext } from "../../store";
import { getBook } from "../../utils";

import "./styles.scss";

/**
 * @name Search
 * @summary Takes user input on Search field,
 * requests book information from Google Books and navigates user to book details.
 * @returns {JSX.Element}
 */

const Search = (): JSX.Element => {
  const { results, setResults } = useContext(SearchContext);
  const navigateTo = useNavigate();

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
        onSubmit={async (values, { setSubmitting }) => {
          const { isbn } = values;
          try {
            const response = await getBook(isbn);
            setResults([...results, response]);
            setSubmitting(false);
            navigateTo(`/books/${isbn}`);
          } catch (err) {
            console.error(err);
          }
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
