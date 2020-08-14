import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "30px",
    textTransform: "inherit",
    fontWeight: "bold",
    padding: "15px 50px",
    fontSize: "26px"
  },
}));
export default function CButton({
  text,
  backgroundColor,
  textColor,
  ...others
}) {
  const cls = useStyles();
  return (
    <Button
      className={cls.root}
      style={{ backgroundColor: backgroundColor, color: textColor }}
      {...others}
    >
      {text}
    </Button>
  );
}
