import "./style.css";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <div className="login">
        <div className="login_wrapper">
          <div className="login_wrap">
            <div className="login_1">
              <img src="../../icons/facebook.svg" alt="" />
              <span>
                Connect with friends and the world around you on Facebook.
              </span>
            </div>
            <div className="login_2">
              <div className="login_2_wrap">
                <Formik>
                  {(formik) => (
                    <Form>
                      <input type="text" />
                      <input type="text" />
                      <button type="submit" className="blue_btn">
                        Log In
                      </button>
                    </Form>
                  )}
                </Formik>
                <Link to="/forgot" className="forgot_password">
                  Forget password?
                </Link>
                <div className="sign_splitter"></div>
                <button className="blue_btn open_signup">
                  Create new account
                </button>
              </div>
              <Link to="/" className="sign_extra">
                <b>Create a Page</b>for a celebrity, brand or business.
              </Link>
            </div>
          </div>
          <div className="register"></div>
        </div>
      </div>
    </>
  );
}
