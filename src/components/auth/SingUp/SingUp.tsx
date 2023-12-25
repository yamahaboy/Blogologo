import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { useNavigate } from "react-router-dom";
import { routeLocationsEnum } from "../../../Router/Router";
import { setSingUp } from "../../../store/reducers/authReducer/actions";
import { Box, Button, TextField } from "@mui/material";
import { SingUp } from "../../../models/authProps";

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { singUp } = useAppSelector((state) => state.authReducer);
  const [error, setError] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    Name: Yup.string().required("Name is required"),
    Surname: Yup.string().required("Surname is required"),
  });

  const handleSubmit = async (values: SingUp) => {
    try {
      await validationSchema.validate(values, { abortEarly: false });
      const userExists = singUp.find((user) => user.email === values.email);

      if (userExists) {
        setError("User with this email already exists");
        setFormSubmitted(false);
        return;
      }

      dispatch(setSingUp([values]));
      setFormSubmitted(true);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessage = error.errors.join(" ");
        setError(errorMessage);
        setFormSubmitted(false);
      }
    }
  };

  return (
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
          color: "#313037",
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
          color: "#313037",
          marginBottom: "32px",
        }}
      >
        Sign Up
      </Box>
      <Formik
        initialValues={{ email: "", password: "", Name: "", Surname: "" }}
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
            width: "50%",
            height: "auto",
            gap: "40px",
            padding: "40px",
            border: "none",
            borderRadius: "16px",
            backgroundColor: "#fff",
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
                color: "#313037",
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
              fullWidth
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
                color: "#313037",
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
              fullWidth
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
                color: "#313037",
              }}
            >
              Name
            </Box>
            <Field
              placeholder="Your name"
              type="text"
              id="Name"
              name="Name"
              as={TextField}
              fullWidth
            />
            <ErrorMessage name="Name">
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
                color: "#313037",
              }}
            >
              Surname
            </Box>
            <Field
              placeholder="Your surname"
              type="text"
              id="Surname"
              name="Surname"
              as={TextField}
              fullWidth
            />
            <ErrorMessage name="Surname">
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

          {formSubmitted && (
            <Box sx={{ color: "green", marginTop: "10px" }}>
              Account created successfully!
            </Box>
          )}

          {error && <Box sx={{ color: "red", marginTop: "10px" }}>{error}</Box>}

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
              style={{ color: "#6C1BDB", cursor: "pointer", fontWeight: "500" }}
              onClick={() => handleNavigate(`${routeLocationsEnum.signIn}`)}
            >
              Sign In
            </span>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};

export default SignUp;
