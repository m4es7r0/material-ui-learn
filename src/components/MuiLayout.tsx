import React, { useState } from "react";
import { Stack, Box, Grid } from "@mui/material";

export default function MuiBox() {
  return (
    <>
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
      <Grid container rowSpacing={2} columnSpacing={2} border={"2px solid red"}>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Box bgcolor="primary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Box bgcolor="primary.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Box bgcolor="primary.light" p={2}>
            Item 4
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Box bgcolor="primary.light" p={2}>
            Item 5
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Box bgcolor="primary.light" p={2}>
            Item 6
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
