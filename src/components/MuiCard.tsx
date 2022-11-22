import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

export default function MuiCard() {
  return (
    <Box width={300}>
      <Card>
        <CardMedia
          className="h-[140px]"
          component="img"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="p">
            React
          </Typography>
          <Typography gutterBottom variant="body1" color="text.secondary">
            A JavaScript library for building user interfaces
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained">
            share
          </Button>
          <Button size="small" variant="outlined">
            learn more
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
