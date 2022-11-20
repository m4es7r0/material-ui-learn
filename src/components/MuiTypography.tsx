import { Typography } from "@mui/material";

export default function MuiTypography() {
  return (
    <div className="Typography">
      <Typography variant="h1">h1 MuiTypography</Typography>
      <Typography variant="h2">h2 MuiTypography</Typography>
      <Typography variant="h3">h3 MuiTypography</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 MuiTypography
      </Typography>
      <Typography variant="h5">h5 MuiTypography</Typography>
      <Typography variant="h6">h6 MuiTypography</Typography>
      <br />
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle1">Subtitle 2</Typography>
      <br />
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dolores?
        Sit, illum repellendus fugit eveniet ut qui? Quaerat repellendus beatae,
        esse commodi earum asperiores, debitis accusamus reiciendis inventore
        non ut?
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, cumque
        odit doloremque, nulla maxime deserunt dignissimos nesciunt iste vero
        eum voluptatum tempore earum fuga veniam veritatis doloribus sed, animi
        illo.
      </Typography>
    </div>
  );
}
