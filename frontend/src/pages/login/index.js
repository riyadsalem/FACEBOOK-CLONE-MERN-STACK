import "./style.css";
import { LoginForm, RegisterForm, Footer } from "../../components/login";

export default function Login() {
  return (
    <>
      <div className="login">
        <div className="login_wrapper">
          <LoginForm />
          <RegisterForm />
          <Footer />
        </div>
      </div>
    </>
  );
}
