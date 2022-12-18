import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import LoginInput from "../../components/inputs/logininput";
import { useState } from "react";
import * as Yup from "yup";
import DotLoader from "react-spinners/DotLoader";
import axios from "axios";

const loginInfos = {
  email: "",
  password: "",
};

export default function LoginForm({ setVisible }) {
  const [login, setLogin] = useState(loginInfos);
  const { email, password } = login;

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const loginValidation = Yup.object({
    email: Yup.string()
      .required("Email address is required.")
      .email("Must be a valid email.")
      .max(100),
    password: Yup.string().required("password is required."),
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const loginSubmit = async () => {
    try {
      const { data } = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      setError("");
      setSuccess(data.message);
    } catch (error) {
      setSuccess("");
      setLoading(false);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="login_wrap">
      <div className="login_1">
        <img src="../../icons/facebook.svg" alt="" />
        <span>
          Facebook helps you connect and share with the people in you life.
        </span>
      </div>
      <div className="login_2">
        <div className="login_2_wrap">
          <Formik
            enableReinitialize
            initialValues={{ email, password }}
            validationSchema={loginValidation}
            onSubmit={loginSubmit}
          >
            {(formik) => (
              <Form>
                <LoginInput
                  type="text"
                  name="email"
                  placeholder="Email address or Phone number"
                  onChange={handleLoginChange}
                />

                <LoginInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleLoginChange}
                  bottom
                />
                <button type="submit" className="blue_btn">
                  Log In
                </button>
              </Form>
            )}
          </Formik>
          <Link to="/forgot" className="forgot_password">
            Forget password?
          </Link>
          <DotLoader color="#1876f2" loading={loading} size={30} />
          {error && <div className="error_text">{error}</div>}

          <div className="sign_splitter"></div>
          <button
            className="blue_btn open_signup"
            onClick={() => {
              setVisible(true);
            }}
          >
            Create new account
          </button>
        </div>
        <Link to="/" className="sign_extra">
          <b>Create a Page</b> for a celebrity, brand or business.
        </Link>
      </div>
    </div>
  );
}
