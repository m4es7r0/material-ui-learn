import React from "react";

import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

export default function MuiButton() {
  // const [formats, setFormats] = React.useState<string[]>(["bold"]); // if exlusive prop is true
  const [formats, setFormats] = React.useState<string | null>("bold"); // if exlusive prop is true
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string | null
  ) => {
    setFormats(updatedFormats);
  };
  return (
    <Stack
      spacing={4}
      className="bg-[#ffffffde] container p-6 rounded div > place-items-center"
    >
      <Stack spacing={2} direction="row">
        <Button variant="outlined" href="https://google.com">
          {`tag </a> as button`}
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">
          primary
        </Button>
        <Button variant="text" color="secondary">
          secondary
        </Button>
        <Button variant="text" color="info">
          info
        </Button>
        <Button variant="text" color="warning">
          warning
        </Button>
        <Button variant="text" color="error">
          error
        </Button>
        <Button variant="text" color="success">
          success
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="primary">
          primary
        </Button>
        <Button variant="outlined" color="secondary">
          secondary
        </Button>
        <Button variant="outlined" color="info">
          info
        </Button>
        <Button variant="outlined" color="warning">
          warning
        </Button>
        <Button variant="outlined" color="error">
          error
        </Button>
        <Button variant="outlined" color="success">
          success
        </Button>
      </Stack>

      <Stack spacing={2} display="block" direction="row">
        <Button size="small" variant="contained">
          small
        </Button>
        <Button size="medium" variant="contained">
          medium
        </Button>
        <Button size="large" variant="contained">
          large
        </Button>
      </Stack>

      <Stack spacing={2} display="block" direction="row">
        <Button startIcon={<SendIcon />} disableElevation variant="contained">
          Send Start
        </Button>
        <Button endIcon={<SendIcon />} disableRipple variant="outlined">
          Send End
        </Button>
        <IconButton aria-label="Send" color="error" size="large">
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack display="block" direction="row">
        <ButtonGroup
          variant="outlined"
          orientation="horizontal"
          size="small"
          color="info"
          aria-label="aligment-button-group"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Roght</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formating"
          value={formats}
          onChange={handleFormatChange}
          size="small"
          color="info"
          orientation="vertical"
          exclusive
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}
