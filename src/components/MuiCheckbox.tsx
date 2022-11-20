import { useState } from "react";
import {
  Stack,
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

export default function MuiCheckbox() {
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTerms(event.target.checked);
  };

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);

    if (index === -1) setSkills([...skills, event.target.value]);
    else setSkills(skills.filter((e) => e !== event.target.value));
  };

  console.log(acceptTerms);
  console.log(skills);

  return (
    <Stack
      direction="row"
      spacing={2}
      className="bg-[#ffffffde] text-[#242424] container w-full p-6 rounded place-items-center"
    >
      <Stack>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox checked={acceptTerms} onChange={handleChange} />}
        ></FormControlLabel>

        <Box className="flex place-items-center">
          <Checkbox
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
          />
          <Typography variant="body1">custom checkbox icon</Typography>
        </Box>
      </Stack>

      <Stack>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              value="html"
              control={
                <Checkbox
                  size="small"
                  color="info"
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            ></FormControlLabel>
            <FormControlLabel
              label="CSS"
              value="css"
              control={
                <Checkbox
                  color="warning"
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            ></FormControlLabel>
            <FormControlLabel
              label="JS"
              value="javascript"
              control={
                <Checkbox
                  size="small"
                  color="error"
                  checked={skills.includes("javascript")}
                  onChange={handleSkillChange}
                />
              }
            ></FormControlLabel>
          </FormGroup>
        </FormControl>
      </Stack>
    </Stack>
  );
}
