import React, { useState } from "react";
import { Stack, Box } from "@mui/material";

export default function MuiBox() {
  return (
    <Stack
      direction="row"
      spacing={2}
      className="bg-[#ffffffde] text-[#242424] container w-full p-6 rounded place-items-center"
    >
      <Box
        component="article"
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          padding: "1rem",
          borderRadius: "1rem",
          height: "120px",
          width: "120px",
          transition: "all ease .2s",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      ></Box>
      <Box
        display="flex"
        height="120px"
        width="120px"
        bgcolor="success.light"
        borderRadius="1rem"
      ></Box>
    </Stack>
  );
}
