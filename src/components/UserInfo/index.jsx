import { Paper, Typography, Stack, TextField, Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";

export const UserInfo = () => {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm({
    initialValues: {
      firstName: "",
      secondName: "",
      patronymic: "",
      citizenship: "",
    },
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
    navigate("/userParams")
  };

  return (
    <>
      <Paper elevation={2} sx={{ padding: "10px" }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
          About u!
        </Typography>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Stack
            spacing={1}
            sx={{ width: "90%", margin: "10px auto" }}
            divider={<Divider />}
          >
            <TextField
              type="text"
              label={"FirstName"}
              {...register("firstName", {
                required: "Required",
              })}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
            <TextField
              type="text"
              label={"SecondName"}
              {...register("secondName", {
                required: "Required",
              })}
              error={!!errors.secondName}
              helperText={errors.secondName?.message}
            />
            <TextField
              type="text"
              label={"Patronymic"}
              {...register("patronymic", {
                required: "Required",
              })}
              error={!!errors.patronymic}
              helperText={errors.patronymic?.message}
            />
            <TextField
              type="text"
              label={"Citizenship"}
              {...register("citizenship", {
                required: "required",
              })}
              error={!!errors.citizenship}
              helperText={errors.citizenship?.message}
            />
            <Button type="submit" variant="outlined">
              Next Step
            </Button>
          </Stack>
          <DevTool control={control} />
        </form>
      </Paper>
    </>
  );
};
