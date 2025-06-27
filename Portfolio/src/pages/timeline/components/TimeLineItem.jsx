import React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

export default function TimeLineItem({
  title = "Concepteur Développeur d'Application",
  company = "SOFIP Béthune",
  desc = "",
  icon,
  date = new Date(),
}) {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{m: "auto 0"}}
        align="right"
        variant="body2"
        className="text-secondary hidden sm:block italic"
      >
        {date.toLocaleDateString("fr-FR", {year: "numeric", month: "long"})}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot variant="outlined" color="inherit">
          {icon}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{py: "12px", px: 2}}>
        <h2 className="text-secondary font-(family-name:--title-font-family) uppercase text-[16px] sm:text-xl">
          {title}
        </h2>
        <Typography className="hidden sm:block opacity-50">{`${company}`}</Typography>
        <Typography className="block sm:hidden opacity-50">{`${company} - ${date.toLocaleDateString(
          "fr-FR",
          {
            year: "numeric",
            month: "long",
          }
        )}`}</Typography>

        <p>{desc}</p>
      </TimelineContent>
    </TimelineItem>
  );
}
