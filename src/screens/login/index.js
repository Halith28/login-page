import {
  Grid,
  TextField,
  Button,
  makeStyles,
  Typography,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AlertContext } from "../../contexts";
import { AlertProps } from "../../utils/constants";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  content: {
    width: "300px",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  textField: {
    marginBottom: 20,
  },
  loginText: {
    color: theme.palette.primary.main,
    marginBottom: 20,
  },
  logIn: {
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
    color: "blue",
  },
}));

const Login = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    email: "",
    password: "",
    isLoggingIn: false,
    error: {},
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const alert = useContext(AlertContext);

  const validation = () => {
    if (state?.email?.length === 0 && state?.password?.length === 0) {
      alert.setSnack({
        ...alert,
        open: true,
        severity: AlertProps.severity.error,
        msg: "Please fill the required fields",
        vertical: AlertProps.vertical.top,
        horizontal: AlertProps.horizontal.center,
      });
    } else if (state?.email?.length === 0 || state?.password?.length === 0) {
      state.error = {
        email:
          state?.email?.length === 0 ||
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(state.email) ===
            false
            ? true
            : false,
        password: state?.password?.length === 0 ? true : false,
      };
      setState({ ...state });
      return true;
    } else if (state?.email.length > 0 || state?.password?.length > 0) {
      state.error = {
        ...state.error,
        email:
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(state.email) ===
          false
            ? true
            : false,
      };
      setState({ ...state });
      return true;
    } else {
      state.error = {
        email: false,
        password: false,
      };
    }
  };

  const handleChange1 = (event) => {
    setState({
      ...state,
      email: event.target.value,
      error: { ...state.error, email: false },
    });
  };

  const handleChange2 = (event) => {
    setState({
      ...state,
      password: event.target.value,
      error: { ...state.error, password: false },
    });
  };

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.content}>
        <Typography variant="h6" align="center" className={classes.loginText}>
          Login
        </Typography>
        <TextField
          name="email"
          type="text"
          variant="outlined"
          fullWidth
          placeholder="Enter your email id"
          className={classes.textField}
          onChange={handleChange1}
          error={state?.error?.email ?? false}
          helperText={
            state?.error?.email && (
              <Typography
                component={"span"}
                variant="subtitle2"
                style={{ color: "red" }}
              >
                Enter the valid email address
              </Typography>
            )
          }
        />
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Password"
          className={classes.textField}
          onChange={handleChange2}
          type={showPassword ? "text" : "password"}
          error={state?.error?.password ?? false}
          helperText={
            state?.error?.password && (
              <Typography
                component={"span"}
                variant="subtitle2"
                style={{ color: "red" }}
              >
                Enter the valid password
              </Typography>
            )
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  // onMouseOver={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          className={classes.textField}
          onClick={() => validation()}
        >
          {`${state.isLoggingIn ? "Logging In..." : "Log In"}`}
        </Button>
        <Typography variant="subtitle2" className={classes.logIn}>
          Don't have an account?{" "}
          <Link className={classes.link} to="/signup">
            SignUp
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Login;
