import React from "react";
import {
  Stack,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

export default function MuiSpeedDial() {
  return (
    // <Stack className="bg-[#ffffffde] text-[#242424] rounded p-6"></Stack>
    <SpeedDial
      ariaLabel="navigation speed dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<ModeEditIcon />} />}
    >
      <SpeedDialAction icon={<ContentCopyIcon />} tooltipTitle="Copy" />
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
    </SpeedDial>
  );
}
