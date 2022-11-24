import { Link, Stack, Typography } from "@mui/material";
import React from "react";

export default function MuiLink() {
  return (
    <Stack
      direction="row"
      spacing={2}
      className="bg-[#ffffffde] text-[#242424] rounded p-6"
    >
      <Link href="#" variant="h6">
        MuiLink
      </Link>
      <Typography variant="h6">
        <Link href="#" color="error" underline="hover">
          MuiLink
        </Link>
      </Typography>
    </Stack>
  );
}
