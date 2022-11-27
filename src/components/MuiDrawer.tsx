import React from "react";
import { Stack, Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function MuiDrawer() {
  const [open, setOpen] = React.useState(false);

  return (
    <Stack className="bg-[#ffffffde] text-[#242424] rounded p-6">
      <IconButton
        children={<MenuIcon fontSize="inherit" />}
        size="large"
        aria-label="logo"
        onClick={() => setOpen(true)}
      />
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box width="25vw" textAlign="center" role="presentation">
          <Typography variant="h6" component="div" my={2}>
            Side Panel
          </Typography>
        </Box>
        <IconButton children={<MenuIcon />} />
        <IconButton children={<MenuIcon />} />
        <IconButton children={<MenuIcon />} />
      </Drawer>
    </Stack>
  );
}
