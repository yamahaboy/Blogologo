import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../../store/store";
import { useNavigate } from "react-router-dom";
import { routeLocationsEnum } from "../../../Router/Router";
import {
  setNameSurname,
  setSingUp,
} from "../../../store/reducers/authReducer/actions";
import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import { SignUpProps } from "../../../models/authProps";
import useAuth from "../../../hooks/useAuth";
import useThemeColors from "../../../hooks/useThemeColors";

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const themeColors = useThemeColors();
  const isSmallScreen = useMediaQuery("(max-width:1100px)");
  const [error, setError] = useState<string | null>(null);

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    surname: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string()
      .min(4, "* Password must be longer than 4 symbols")
      .max(15, "* Password must be shoter than 4 symbols")
      .matches(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{4,15})/,
        "* Password must contain at least one uppercase letter and one special character"
      )
      .required(),
  });

  const intialFormikValues: SignUpProps = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };

  const handleSubmit = (formikValues: SignUpProps) => {
    const { isSuccess, error } = signUp({
      name: formikValues.name,
      surname: formikValues.surname,
      password: formikValues.password,
      email: formikValues.email,
    });

    if (error) {
      setError(error);
      return;
    }

    if (isSuccess) {
      formik.resetForm();
      navigate(routeLocationsEnum.mainPage);
      dispatch(setSingUp(formikValues));
      dispatch(
        setNameSurname({
          name: formikValues.name,
          surname: formikValues.surname,
        })
      );
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
        paddingBottom: isSmallScreen ? "30%" : "25%",
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
          onClick={() => handleNavigate(`${routeLocationsEnum.mainPage}`)}
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
          Sign Up
        </Box>
        <Formik
          initialValues={{ email: "", password: "", name: "", surname: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              width: isSmallScreen ? "70%" : "50%",
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
                Name
              </Box>
              <Field
                placeholder="Your name"
                type="text"
                id="name"
                name="name"
                as={TextField}
                style={{
                  backgroundColor: themeColors.inputColor,
                  color: themeColors.footerTextColor,
                }}
              />
              <ErrorMessage name="name">
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
                Surname
              </Box>
              <Field
                placeholder="Your surname"
                type="text"
                id="surname"
                name="surname"
                as={TextField}
                style={{
                  backgroundColor: themeColors.inputColor,
                  color: themeColors.footerTextColor,
                }}
              />
              <ErrorMessage name="surname">
                {(msg) => (
                  <Box sx={{ color: "red", marginTop: "10px" }}>{msg}</Box>
                )}
              </ErrorMessage>
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
              Sign Up
            </Button>

            {formik.status && (
              <Box sx={{ color: "green", marginTop: "10px" }}>
                Account created successfully!
              </Box>
            )}

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
                color: "#8D8E97",
                gap: "5px",
              }}
            >
              Already have an account?
              <span
                style={{
                  color: "#6C1BDB",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
                onClick={() => handleNavigate(`${routeLocationsEnum.signIn}`)}
              >
                Sign In
              </span>
            </Box>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};

export default SignUp;
