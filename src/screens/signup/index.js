import React from "react";
import {
  Grid,
  makeStyles,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  buttonGrid: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0px",
  },
  button: {
    textTransform: "capitalize",
  },
  logIn: {
    textAlign: "center",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.primary.main,
    marginBottom: "16px",
  },
  content: {
    width: "300px",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  link: {
    textDecoration: "none",
    color: "blue",
  },
}));

const SignUpPage = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    email: "",
    error: {},
  });

  const handleChange1 = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  console.log(state);

  const validation = () => {
    if (state?.email?.length === 0) {
      state.error = {
        email:
          state?.email?.length === 0 ||
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(state.email) ===
            false
            ? true
            : false,
      };
      setState({ ...state });
      return true;
    } else if (state?.email.length > 0) {
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
      };
      return true;
    }
  };

  // const handleChange = (event) => {
  //   setState({
  //     email: event.target.value,
  //     error: { email: false },
  //   });
  // };

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid className={classes.content}>
        <Grid>
          <Typography variant="h6" className={classes.title}>
            SignUp
          </Typography>
          <TextField
            name="email"
            variant="outlined"
            fullWidth
            placeholder="Enter your official mail Id"
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

          <Grid className={classes.buttonGrid}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              // onClick={() => setVerifySignup(true)}
              onClick={() => validation()}
              fullWidth
            >
              Send Email
            </Button>
          </Grid>
          <Typography variant="subtitle2" className={classes.logIn}>
            Already have an account?{" "}
            <Link className={classes.link} to="/login">
              Log In
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignUpPage;
