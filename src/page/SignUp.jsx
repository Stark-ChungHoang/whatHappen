import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useHistory } from 'react-router'
import Swal from "sweetalert2";
import {Link as LinkR} from "react-router-dom"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        What Happen
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
    
    container: {
        position: "relative",
        boxShadow: "rgba(0, 0, 0, 0.4) 0px 0px 10px",
        padding: " 30px ",
       marginTop: "30px",
        background: "white",
        borderRadius: "10px",
    },
    icon: {
        position: 'absolute',
        top: "3%",
        right: "5%",
        transform: "translate( 10px 10px)",
        cursor: 'pointer',

        fontSize: '30px',

    },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  validate: {
    color: 'red',
}
}));

export default function SignUp() {
    const history=useHistory()
  const classes = useStyles();
  const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),

  });
const { register, handleSubmit, formState: { errors } } = useForm(
    {resolver:yupResolver(schema)}
);

  const onSubmit = data => {
     Swal.fire({
        icon: "success",
        title: "SIGN UP SUCCESS",
      }).then((res)=> {
          if(res.isConfirmed) {
            history.push("/login")
            return res
          }
      })
      
  };
  return (
    
          <Container className={classes.container} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.icon}><LinkR to="/">X</LinkR></div>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form  onSubmit={handleSubmit(onSubmit)} 
                     className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField {...register("email")}
                variant="outlined"
                required
                fullWidth
                type="email"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <p >{errors.email&& <span className={classes.validate}>Please include an '@' in the email address!!!</span>}</p>
            </Grid>
            <Grid item xs={12}>
              <TextField {...register("password")}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <p >{errors.password&& <span className={classes.validate}>Password must be at least 8 characters!!!</span>}</p>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <LinkR to="/login" variant="body2">
                Already have an account? Sign in
              </LinkR>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
 
     );
}