import {
  Paper,
  Typography,
  Stack,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  TextField,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useForm } from "react-hook-form";
import { dayRegex, monthRegex, yearRegex } from "./constants";
import { useNavigate } from "react-router-dom";

export const UserParams = () => {
  const primary = grey[800];
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    gender: "",
    marital: "",
    date: { day: "", month: "", year: "" },
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
    navigate("/result");
  };
  return (
    <>
      <Paper elevation={2} sx={{ padding: "10px" }}>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          More info about u...
        </Typography>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={1}>
            <FormControl
              error={!!errors.gender}
              sx={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FormLabel id="gender" sx={{ color: primary, fontWeight: 600 }}>
                Gender
              </FormLabel>
              <RadioGroup row aria-labelledby="gender">
                <FormControlLabel
                  control={<Radio />}
                  value="female"
                  label="Female"
                  {...register("gender", {
                    required: "choose your G",
                  })}
                />
                <FormControlLabel
                  control={<Radio />}
                  value="male"
                  label="Male"
                  {...register("gender", {
                    required: "choose your G",
                  })}
                />
              </RadioGroup>
            </FormControl>
            <FormControl
              error={!!errors.marital}
              sx={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FormLabel sx={{ color: primary, fontWeight: 600 }}>
                Marital status
              </FormLabel>
              <RadioGroup row>
                <FormControlLabel
                  control={<Radio />}
                  value="single"
                  label="Single"
                  {...register("marital", {
                    required: "Choose your marital status",
                  })}
                />
                <FormControlLabel
                  control={<Radio />}
                  value="married"
                  label="Married"
                  {...register("marital", {
                    required: "Choose your marital status",
                  })}
                />
              </RadioGroup>
            </FormControl>
            <Typography
              variant="subtitle"
              sx={{ textAlign: "center", fontWeight: "600", color: primary }}
            >
              Date of birth
            </Typography>
            <Stack direction="row" spacing={1}>
              <TextField
                label="DD"
                {...register("date.day", {
                  required: "Required",
                  pattern: {
                    value: dayRegex,
                    message: "Invalid day format",
                  },
                })}
                error={!!errors.date?.day}
                helperText={errors.date?.day?.message}
              />
              <TextField
                label="MM"
                {...register("date.month", {
                  required: "Required",
                  pattern: {
                    value: monthRegex,
                    message: "Invalid month format",
                  },
                })}
                error={!!errors.date?.month}
                helperText={errors.date?.month?.message}
              />
              <TextField
                label="YYYY"
                {...register("date.year", {
                  required: "Required",
                  pattern: {
                    value: yearRegex,
                    message: "invalid year format",
                  },
                })}
                error={!!errors.date?.year}
                helperText={errors.date?.year?.message}
              />
            </Stack>
            <Button type="submit" variant="outlined">
              Sumbit
            </Button>
          </Stack>
        </form>
      </Paper>
    </>
  );
};
