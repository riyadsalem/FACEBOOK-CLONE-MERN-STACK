import { Form, Formik } from "formik";
import { useState } from "react";
import RegisterInput from "../inputs/registerinput";

export default function RegisterForm() {
  const userInfos = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    bYear: new Date().getFullYear(),
    bMonth: new Date().getMonth() + 1,
    bDay: new Date().getDate(),
    gender: "",
  };

  const [user, setUser] = useState(userInfos);

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const {
    first_name,
    last_name,
    email,
    password,
    bYear,
    bMonth,
    bDay,
    gender,
  } = user;
  const yearTemp = new Date().getFullYear();

  const getDays = () => {
    return new Date(bYear, bMonth, 0).getDate(); // Days in Month
  };

  const years = Array.from(new Array(108), (val, index) => yearTemp - index);
  const months = Array.from(new Array(12), (val, index) => 1 + index);
  const days = Array.from(new Array(getDays()), (val, index) => 1 + index);

  return (
    <div className="blur">
      <div className="register">
        <div className="register_header">
          <i className="exit_icon"></i>
          <span>Sign Up</span>
          <span>it's quick adn easy</span>
        </div>
        <Formik>
          {(Formik) => (
            <Form className="register_form">
              <div className="reg_line">
                <RegisterInput
                  type="text"
                  name="first_name"
                  placeholder="First name"
                  onChange={handleRegisterChange}
                />
                <RegisterInput
                  type="text"
                  name="last_name"
                  placeholder="Last name"
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="reg_line">
                <RegisterInput
                  type="text"
                  name="email"
                  placeholder="Mobile number or email"
                  onChange={handleRegisterChange}
                />
                <RegisterInput
                  type="password"
                  name="password"
                  placeholder="New Password"
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="reg_col">
                <div className="reg_line_header">
                  Date of birth <i className="info_icon"></i>
                </div>
                <div className="reg_grid">
                  <select
                    name="bDay"
                    value={bDay}
                    onChange={handleRegisterChange}
                  >
                    {days.map((day, index) => (
                      <option value={day} key={index}>
                        {day}
                      </option>
                    ))}
                  </select>
                  <select
                    name="bMonth"
                    value={bMonth}
                    onChange={handleRegisterChange}
                  >
                    {months.map((month, index) => (
                      <option value={month} key={index}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <select
                    name="bYear"
                    value={bYear}
                    onChange={handleRegisterChange}
                  >
                    {years.map((year, index) => (
                      <option value={year} key={index}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="reg_col">
                <div className="reg_line_header">
                  Gender <i className="info_icon"></i>
                </div>
                <div className="reg_grid">
                  <label htmlFor="male">
                    Male
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      onChange={handleRegisterChange}
                    />
                  </label>

                  <label htmlFor="female">
                    Female
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      onChange={handleRegisterChange}
                    />
                  </label>

                  <label htmlFor="custom">
                    Custom
                    <input
                      type="radio"
                      name="gender"
                      id="custom"
                      value="custom"
                      onChange={handleRegisterChange}
                    />
                  </label>
                </div>
              </div>
              <div className="reg_infos">
                by clicking sing up, you agree to our{" "}
                <span>Terms, Data Policy &nbsp;</span>and{" "}
                <span>Cookie Policy.</span> You may recive SMS notifications
                from us and can opt out at any time.
              </div>
              <div className="reg_btn_wrapper">
                <button className="blue_btn open_signup">Sign Up</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
