import React from "react";
import { Stack, Box, TextField, MenuItem } from "@mui/material";

export default function MuiSelect() {
  const [country, setCountry] = React.useState("");
  const [countries, setCountries] = React.useState<string[]>([]); // for multiple

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split("") : value);
  };
  return (
    <Stack className="bg-[#ffffffde] container w-full p-6 rounded place-items-center">
      <Box width="250px">
        <TextField
          label="Select Cuntry"
          value={countries}
          onChange={handleChange}
          size="small"
          fullWidth
          select
          SelectProps={{
            multiple: true,
          }}
        >
          <MenuItem value="USA">Usa</MenuItem>
          <MenuItem value="CHINE">Chine</MenuItem>
          <MenuItem value="UKRAINE">Ukraine</MenuItem>
        </TextField>
      </Box>
    </Stack>
  );
}
