import { FAQ } from "../constants";
import React from "react";
import { Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Help = () => {
  return FAQ.map((item) => (
    <Accordion key={item.id} className="border-none mb-6" elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        id="panel1a-header"
        className="cursor-pointer"
      >
        <p className="font-bold">{item.title}</p>
      </AccordionSummary>
      <AccordionDetails>
        <p className="font-semibold">{item.description}</p>
      </AccordionDetails>
    </Accordion>
  ));
};

export default Help;
