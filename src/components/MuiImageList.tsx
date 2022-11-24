import React from "react";
import { Stack, ImageList, ImageListItem } from "@mui/material";

type Image = {
  img: string;
  title: string;
};

const images: Image[] = [
  {
    img: "https://source.unsplash.com/random",
    title: "image",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "image",
  },
];

export default function MuiImageList() {
  return (
    <Stack spacing={4} className="bg-[#ffffffde] text-[#242424] p-6 rounded">
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={165}>
        {images.map((image) => (
          <ImageListItem key={image.img}>
            <img
              src={`${image.img}?w=165&h=165&fit=crop&auto=format&dpr=2`}
              alt={image.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
}
