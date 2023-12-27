import React, { useState } from "react";
import { Formik, Form, ErrorMessage, useFormik, Field } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import {
  setNameSurname,
  setSingIn,
} from "../../../store/reducers/authReducer/actions";
import { useNavigate } from "react-router-dom";
import { routeLocationsEnum } from "../../../Router/Router";
import { Box, Button, TextField } from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import { Label, SingIn } from "../../../models/authProps";
import useThemeColors from "../../../hooks/useThemeColors";

const SignIn: React.FC = () => {
  const { singUp } = useAppSelector((state) => state.authReducer);
  const themeColors = useThemeColors();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const intialFormikValues: SingIn = {
    email: "",
    password: "",
  };

  const handleSubmit = (formikValues: SingIn) => {
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
      const foundUser = singUp.find(
        (user) => user.email === formikValues.email
      );
      console.log(foundUser, "foundUser");
      if (foundUser) {
        const userLabel: Label = {
          name: foundUser.name,
          surname: foundUser.surname,
        };

        dispatch(setNameSurname(userLabel));
      }
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
    <Box
      sx={{
        maxWidth: "100%",
        height: "67vh",
        backgroundColor: themeColors.backgroundColor,
        paddingTop: "72px",
        paddingBottom: "72px",
      }}
    >
      <Box
        sx={{
          width: "60%",
          margin: "auto",
          height: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          onClick={() => handleNavigate(routeLocationsEnum.mainPage)}
          sx={{
            fontSize: "16px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "400",
            color: themeColors.blogColor,
            cursor: "pointer",
            marginBottom: "32px",
          }}
        >
          Back to home
        </Box>
        <Box
          sx={{
            fontSize: "56px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "700",
            color: themeColors.blogColor,
            marginBottom: "32px",
          }}
        >
          Sign In
        </Box>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnMount={false}
        >
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              width: "50%",
              height: "auto",
              gap: "40px",
              padding: "40px",
              border: "none",
              borderRadius: "16px",
              backgroundColor: themeColors.cardBackColor,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                width: "100%",
                height: "auto",
                gap: "5px",
              }}
            >
              <Box
                sx={{
                  fontSize: "16px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "600",
                  color: themeColors.blogColor,
                }}
              >
                Email
              </Box>
              <Field
                placeholder="Your email"
                type="text"
                id="email"
                name="email"
                as={TextField}
                style={{
                  backgroundColor: themeColors.inputColor,
                  color: themeColors.footerTextColor,
                }}
              />
              <ErrorMessage name="email">
                {(msg) => (
                  <Box sx={{ color: "red", marginTop: "10px" }}>{msg}</Box>
                )}
              </ErrorMessage>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                width: "100%",
                height: "auto",
                gap: "5px",
              }}
            >
              <Box
                sx={{
                  fontSize: "16px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "600",
                  color: themeColors.blogColor,
                }}
              >
                Password
              </Box>
              <Field
                placeholder="Your password"
                type="password"
                id="password"
                name="password"
                as={TextField}
                style={{
                  backgroundColor: themeColors.inputColor,
                  color: themeColors.footerTextColor,
                }}
              />
              <ErrorMessage name="password">
                {(msg) => (
                  <Box sx={{ color: "red", marginTop: "10px" }}>{msg}</Box>
                )}
              </ErrorMessage>
              <Box
                sx={{
                  fontSize: "16px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "400",
                  color: themeColors.blogColor,
                }}
              >
                Forgot password?
              </Box>
            </Box>

            <Button
              type="submit"
              sx={{
                width: "100%",
                borderRadius: "4px",
                backgroundColor: "#6C1BDB",
                color: "#fff",
                height: "3.5rem",
                fontSize: "18px",
                fontFamily: "Inter, sans-serif",
                fontWeight: "600",
                "&:hover": {
                  backgroundColor: "#6C1BDB",
                },
              }}
            >
              Sign In
            </Button>

            {error && (
              <Box sx={{ color: "red", marginTop: "10px" }}>{error}</Box>
            )}

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                fontSize: "16px",
                fontFamily: "Inter, sans-serif",
                fontWeight: "400",
                color: "#313037",
                gap: "5px",
              }}
            >
              Don't have an account?
              <span
                style={{
                  color: "#6C1BDB",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
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
