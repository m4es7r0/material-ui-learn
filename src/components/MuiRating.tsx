import React, { useState } from "react";
import { Stack, Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function MuiRating() {
  const [rating, setRating] = useState<number | null>(null);
  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setRating(newValue);
  };
  console.log(rating);

  return (
    <Stack
      direction="row"
      spacing={2}
      className="bg-[#ffffffde] text-[#242424] container w-full p-6 rounded place-items-center"
    >
      <Rating
        value={rating}
        onChange={handleChange}
        precision={0.5}
        size="large"
        // readOnly
        highlightSelectedOnly
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </Stack>
  );
}
