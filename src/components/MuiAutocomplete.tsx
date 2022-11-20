import React, { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";

type Skill = {
  id: number;
  label: string;
};

const skills = ["html", "css", "javascript", "typescript", "react"];

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

export default function MuiAutocomplete() {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkills] = useState<Skill | null>(null);

  const handleChange = (event: any, newValue: string | null) => {
    setValue(newValue);
  };

  console.log(value);
  console.log(skill);

  return (
    <Stack
      direction="row"
      spacing={2}
      minWidth="500px"
      className="bg-[#ffffffde] text-[#242424] container w-full p-6 rounded place-items-center"
    >
      <Autocomplete
        value={value}
        onChange={handleChange}
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        freeSolo // like google-search
        fullWidth
      />

      <Autocomplete
        value={skill}
        onChange={(event: any, newValue: Skill | null) => setSkills(newValue)}
        options={skillsOptions}
        renderInput={(params) => (
          <TextField {...params} label="Skills Object" />
        )}
        fullWidth
      />
    </Stack>
  );
}
