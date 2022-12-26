import { Form, Formik } from "formik";
import LoginInput from "../../components/inputs/logininput";
import { Link } from "react-router-dom";

export default function CodeVerification({ code, setCode, error }) {
  return (
    <div className="reset_form">
      <div className="reset_form_header">Code verification</div>
      <div className="reset_form_text">
        Please enter coe that been sent to your email.
      </div>
      <Formik enableReinitialize initialValues={{ code }}>
        {(formik) => (
          <Form>
            <LoginInput
              type="text"
              name="code"
              onChange={(e) => {
                setCode(e.target.value);
              }}
              placeholder="Code"
            />
            {error && <div className="error_text">{error}</div>}
            <div className="reset_form_btns">
              <Link to="/login" className="gray_btn">
                Cancel
              </Link>
              <button type="submit" className="blue_btn">
                Continue
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
