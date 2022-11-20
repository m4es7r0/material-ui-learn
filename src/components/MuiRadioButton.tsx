import React from "react";
import {
  Stack,
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

export default function MuiRadioButton() {
  return (
    <Stack className="bg-[#ffffffde] container w-full p-6 rounded place-items-center">
      <Box>
        <FormControl>
          <FormLabel id="job-experience-group-label">
            Years of experience
          </FormLabel>
          <RadioGroup
            name="job-experience-group"
            aria-labelledby="job-experience-group-label"
          >
            <FormControlLabel
              className="text-[#242424]"
              control={<Radio />}
              label="0-2"
              value="0-2"
            />
            <FormControlLabel
              className="text-[#242424]"
              control={<Radio />}
              label="3-5"
              value="3-5"
            />
            <FormControlLabel
              className="text-[#242424]"
              control={<Radio />}
              label="6-8"
              value="6-8"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </Stack>
  );
}
