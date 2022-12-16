import "./style.css";
import { useField, ErrorMessage } from "formik";
import { useMediaQuery } from "react-responsive";

export default function RegisterInput({ placeholder, bottom, ...props }) {
  const [field, meta] = useField(props);

  const view1 = useMediaQuery({
    query: "(min-width:539px)",
  });

  const view2 = useMediaQuery({
    query: "(min-width:850px)",
  });

  const view3 = useMediaQuery({
    query: "(min-width:1170px)",
  });

  return (
    <div className="input_wrap register_input_wrap">
      <input
        className={meta.touched && meta.error ? "input_error_border" : ""}
        style={{
          width: `${
            view1 && (field.name === "first_name" || field.name === "last_name")
              ? "100%"
              : view1 && (field.name == "email" || field.name === "password")
              ? "370px"
              : "300px"
          }`,
        }}
        type={field.type}
        name={field.name}
        placeholder={placeholder}
        {...field}
        {...props}
      />

      {meta.touched && meta.error && (
        <div
          className={view2 ? "input_error input_error_desctop" : "input_error"}
          style={{ transform: "translateY(2px)" }}
        >
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && (
            <div
              className={view2 ? "error-arrow-left" : "error_arrow_bottom"}
            ></div>
          )}
        </div>
      )}

      {meta.touched && meta.error && <i className="error_icon"></i>}
    </div>
  );
}
