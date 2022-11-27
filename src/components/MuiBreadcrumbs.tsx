import React from "react";
import { Stack, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function MuiBreadcrumbs() {
  return (
    <Stack className="bg-[#ffffffde] text-[#242424] rounded p-6">
      <Breadcrumbs
        aria-label="breadcrumbs"
        separator={<NavigateNextIcon fontSize="small" />}
        maxItems={3}
        itemsAfterCollapse={2}
      >
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Stack>
  );
}
