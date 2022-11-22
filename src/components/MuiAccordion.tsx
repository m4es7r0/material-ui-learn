import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function MuiAccordion() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange = (isExpended: boolean, panel: string) => {
    setExpanded(isExpended ? panel : false);
  };

  return (
    <Box>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1_header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          aliquam quod perferendis obcaecati porro libero eligendi cum illum
          sunt, eaque sapiente, magnam accusamus ratione earum nihil accusantium
          incidunt. Iste nobis inventore minima enim, sapiente tempore
          recusandae. In soluta error cupiditate non, facilis recusandae tempore
          porro, temporibus dolorem odio asperiores quam, praesentium ducimus
          dolores nulla maiores doloribus voluptas! Rem, quaerat nihil.
          Assumenda, temporibus? Possimus maiores nesciunt nulla molestiae
          voluptatibus nobis! Dolor a voluptas aliquid, voluptatum quos
          doloribus consequuntur hic nobis quia perferendis provident veniam
          magnam quibusdam repellendus eaque consectetur dolorem rerum
          necessitatibus omnis eum illo magni molestias nemo. Porro, esse
          deleniti!
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2_header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          aliquam quod perferendis obcaecati porro libero eligendi cum illum
          sunt, eaque sapiente, magnam accusamus ratione earum nihil accusantium
          incidunt. Iste nobis inventore minima enim, sapiente tempore
          recusandae. In soluta error cupiditate non, facilis recusandae tempore
          porro, temporibus dolorem odio asperiores quam, praesentium ducimus
          dolores nulla maiores doloribus voluptas! Rem, quaerat nihil.
          Assumenda, temporibus? Possimus maiores nesciunt nulla molestiae
          voluptatibus nobis! Dolor a voluptas aliquid, voluptatum quos
          doloribus consequuntur hic nobis quia perferendis provident veniam
          magnam quibusdam repellendus eaque consectetur dolorem rerum
          necessitatibus omnis eum illo magni molestias nemo. Porro, esse
          deleniti!
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3_header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          aliquam quod perferendis obcaecati porro libero eligendi cum illum
          sunt, eaque sapiente, magnam accusamus ratione earum nihil accusantium
          incidunt. Iste nobis inventore minima enim, sapiente tempore
          recusandae. In soluta error cupiditate non, facilis recusandae tempore
          porro, temporibus dolorem odio asperiores quam, praesentium ducimus
          dolores nulla maiores doloribus voluptas! Rem, quaerat nihil.
          Assumenda, temporibus? Possimus maiores nesciunt nulla molestiae
          voluptatibus nobis! Dolor a voluptas aliquid, voluptatum quos
          doloribus consequuntur hic nobis quia perferendis provident veniam
          magnam quibusdam repellendus eaque consectetur dolorem rerum
          necessitatibus omnis eum illo magni molestias nemo. Porro, esse
          deleniti!
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
