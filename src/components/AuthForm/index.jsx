import {
  Paper,
  Typography,
  Stack,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Alert,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LockClockIcon from "@mui/icons-material/LockClock";
import Divider from "@mui/material/Divider";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    control,
    reset,
  } = form;
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (isSubmitSuccessful) {
      setAlert(true);
      setShowNextButton(true);
      setTimeout(() => {
        setAlert(false);
      }, 5000);
    }
  }, [isSubmitSuccessful]);
  const handleClick = () => {
    navigate("/userInfo")
  }
  return (
    <>
      {alert && <Alert severity="success">Process complete with success</Alert>}
      <Paper elevation={2} sx={{ padding: "10px" }}>
        <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
          My custom form
        </Typography>
        <form noValidate onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Stack
            spacing={1}
            sx={{ width: "90%", margin: "10px auto" }}
            divider={<Divider />}
          >
            <TextField
              label="Email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Is required",
                },
                pattern: {
                  value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                  message: "Invalid email format",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Is required",
                },
                minLength: {
                  value: 5,
                  message: "Too short password",
                },
                maxLength: {
                  value: 10,
                  message: "Too long password",
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((open) => !open)}
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
                startAdornment: (
                  <InputAdornment position="start">
                    <LockClockIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button type="submit" variant="outlined">
              Log in
            </Button>
            {showNextButton ? (
              <Button variant="outlined" endIcon={<ArrowForwardIcon />} onClick={handleClick}>
                Next form
              </Button>
            ) : null}
          </Stack>
          <DevTool control={control} />
        </form>
      </Paper>
    </>
  );
};
