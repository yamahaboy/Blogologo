import React, { useState } from "react";
import { Formik, Form, ErrorMessage, useFormik, Field } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../../store/store";
import { setSingIn } from "../../../store/reducers/authReducer/actions";
import { useNavigate } from "react-router-dom";
import { routeLocationsEnum } from "../../../Router/Router";
import { Box, Button, TextField } from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import { SignInProps } from "../../../models/authProps";
import useSignInStyles from "./styles";

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const {
    signInContainer,
    signInStyles,
    backHomeStyles,
    titleStyles,
    formStyles,
    inputContainer,
    inputLabel,
    inputStyles,
    forgotPass,
    submitBtn,
    footerText,
    spanStyles,
  } = useSignInStyles();
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const intialFormikValues: SignInProps = {
    email: "",
    password: "",
  };

  const handleSubmit = (formikValues: SignInProps) => {
    const { isSuccess, error } = signIn({
      email: formikValues.email,
      password: formikValues.password,
    });

    if (error) {
      setError(error);
      return;
    }

    if (isSuccess) {
      formik.resetForm();
      dispatch(setSingIn(formikValues));
      navigate(routeLocationsEnum.mainPage);
    }
  };

  const formik = useFormik({
    validateOnMount: true,
    initialValues: intialFormikValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <Box sx={signInContainer}>
      <Box sx={signInStyles}>
        <Box
          onClick={() => handleNavigate(routeLocationsEnum.mainPage)}
          sx={backHomeStyles}
        >
          Back to home
        </Box>
        <Box sx={titleStyles}>Sign In</Box>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnMount={false}
        >
          <Form style={formStyles}>
            <Box sx={inputContainer}>
              <Box sx={inputLabel}>Email</Box>
              <Field
                placeholder="Your email"
                type="text"
                id="email"
                name="email"
                as={TextField}
                style={inputStyles}
              />
              <ErrorMessage name="email">
                {(msg) => (
                  <Box sx={{ color: "red", marginTop: "10px" }}>{msg}</Box>
                )}
              </ErrorMessage>
            </Box>

            <Box sx={inputContainer}>
              <Box sx={inputLabel}>Password</Box>
              <Field
                placeholder="Your password"
                type="password"
                id="password"
                name="password"
                as={TextField}
                style={inputStyles}
              />
              <ErrorMessage name="password">
                {(msg) => (
                  <Box sx={{ color: "red", marginTop: "10px" }}>{msg}</Box>
                )}
              </ErrorMessage>
              <Box sx={forgotPass}>Forgot password?</Box>
            </Box>

            <Button type="submit" sx={submitBtn}>
              Sign In
            </Button>

            {error && (
              <Box sx={{ color: "red", marginTop: "10px" }}>{error}</Box>
            )}

            <Box sx={footerText}>
              Don't have an account?
              <span
                style={spanStyles}
                onClick={() => handleNavigate(routeLocationsEnum.signUp)}
              >
                Sign Up
              </span>
            </Box>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};

export default SignIn;
