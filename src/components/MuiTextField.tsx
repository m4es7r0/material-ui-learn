import React from "react";

import { Stack, TextField, InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function MuiTextField() {
  const [visible, setVisible] = React.useState(false);

  return (
    <Stack
      spacing={4}
      className="bg-[#ffffffde] container w-full p-6 rounded place-items-center"
    >
      <Stack direction="row" spacing={2}>
        <TextField label="filled" variant="filled" />
        <TextField label="outlined" variant="outlined" />
        <TextField label="standard" variant="standard" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="small"
          variant="filled"
          size="small"
          color="secondary"
        />
        <TextField
          label="small"
          variant="outlined"
          size="small"
          color="secondary"
        />
        <TextField
          label="small"
          variant="standard"
          size="small"
          color="secondary"
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Password" type="password" />
        <TextField label="Required" required error />
        <TextField label="HelperText" helperText="this is the required field" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField value="Read only" InputProps={{ readOnly: true }} />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
        <TextField
          label="Password"
          type={visible ? "text" : "password"}
          InputProps={{
            style: { padding: "0" },
            endAdornment: (
              <IconButton disableRipple onClick={() => setVisible((s) => !s)}>
                {visible ? (
                  <IconButton>
                    <VisibilityIcon />
                  </IconButton>
                ) : (
                  <IconButton>
                    <VisibilityOffIcon />
                  </IconButton>
                )}
              </IconButton>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
}
