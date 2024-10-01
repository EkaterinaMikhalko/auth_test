import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles.css";
import { observer } from "mobx-react";
import authStore from "../store";
import { useNavigate } from "react-router-dom";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = observer(() => {
  const navigate = useNavigate();
  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Неверный формат электронной почты")
        .required("Электронная почта обязательна"),
      password: Yup.string()
        .min(6, "Пароль должен содержать минимум 6 символов")
        .required("Пароль обязателен"),
    }),
    onSubmit: (values) => {
      console.log("Submitted values:", values);
      authStore.setUser({ email: values.email, password: values.password });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    },
  });

  return (
    <div className="form-container">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <input
            id="email"
            type="email"
            placeholder="Введите e-mail"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="form-error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-group">
          <input
            id="password"
            type="password"
            placeholder="Введите пароль"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="form-error">{formik.errors.password}</div>
          ) : null}
        </div>
        <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>
          Войти
        </button>
      </form>
    </div>
  );
});

export default LoginForm;
