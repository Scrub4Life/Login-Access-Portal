/* eslint-disable react/prop-types */

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Login = ({ name, username }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2>{name}</h2>
      <TextField
        id="filled-basic"
        label={username}
        variant="filled"
        margin="normal"
      />
      <TextField
        id="filled-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="filled"
        margin="normal"
        sx={{ input: { color: "white" } }}
      />
      <Button variant="contained">Submit</Button>
    </div>
  );
};
