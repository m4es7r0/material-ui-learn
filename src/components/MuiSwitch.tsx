import { useState } from "react";
import { Stack, Box, FormControlLabel, Switch } from "@mui/material";

export default function MuiSwith() {
  const [checked, setChecked] = useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      className="bg-[#ffffffde] text-[#242424] container w-full p-6 rounded place-items-center"
    >
      <Box>
        <FormControlLabel
          label="Dark mode"
          control={<Switch checked={checked} onChange={handleChange} />}
        />
      </Box>
    </Stack>
  );
}
