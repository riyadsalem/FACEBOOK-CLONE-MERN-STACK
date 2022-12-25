import { useState } from "react";
import "./style.css";
export default function SendVerificatio() {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  return (
    <div className="send_verification">
      <span>
        Your account is not verified, verify your account before it gets deleted
        after a month from creating.
      </span>
      <a>click here to resend verification link</a>
      {success && <div className="success_text">{success}</div>}
      {error && <div className="error_text">{error}</div>}
    </div>
  );
}
