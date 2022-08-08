import {
  Formik,
  Form,
  Field,
  // ErrorMessage
} from "formik";

import { validate } from "../../utils/beautify-isbn";

import "./styles.scss";

import type { FormErrors } from "../../definitions";

type Props = {
  setISBN: React.Dispatch<React.SetStateAction<any>>;
};

/**
 * @name Search
 * @param {Object} props
 * @returns {JSX.Element}
 */

const Search = (props: Props): JSX.Element => {
  const { setISBN } = props;

  return (
    <div className="Search">
      <Formik
        initialValues={{ isbn: "" }}
        validate={(values) => {
          const errors: FormErrors = {};
          if (!values.isbn) {
            errors.isbn = "ISBN is required";
          } else if (!validate(values.isbn)) {
            errors.isbn = "Must be a valid ISBN-10 or ISBN-13";
          }
          return errors;
        }}
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
              <Field name="isbn" placeholder="Search for ISBN..." />
              {/*<ErrorMessage name="isbn" component="div" />*/}
              <button type="submit" disabled={isSubmitting}>
                Search
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Search;
