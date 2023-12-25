import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { setSingIn } from "../../../store/reducers/authReducer/actions";
import { useNavigate } from "react-router-dom";
import { routeLocationsEnum } from "../../../Router/Router";
import { Box, Button, TextField } from "@mui/material";

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { singUp } = useAppSelector((state) => state.authReducer);
  const [error, setError] = useState<string | null>(null);

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      await validationSchema.validate(values, { abortEarly: false });
      setError(null);

      const user = singUp.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );

      if (!user) {
        setError("Incorrect email or password");
        return;
      }

      dispatch(setSingIn(user));
      handleNavigate(routeLocationsEnum.mainPage);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessage = error.errors.join(" ");
        setError(errorMessage);
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
        onClick={() => handleNavigate(routeLocationsEnum.mainPage)}
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
            <TextField
              placeholder="Your email"
              type="text"
              id="email"
              name="email"
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
            <TextField
              placeholder="Your password"
              type="password"
              id="password"
              name="password"
              fullWidth
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
                color: "#313037",
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
            Don't have an account?
            <span
              style={{ color: "#6C1BDB", cursor: "pointer", fontWeight: "500" }}
              onClick={() => handleNavigate(routeLocationsEnum.signUp)}
            >
              Sign Up
            </span>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};

export default SignIn;
