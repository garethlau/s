import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "30px",
    textTransform: "inherit",
    fontWeight: "bold",
    padding: "10px 45px",
    fontSize: "26px",
    border: "5px solid",
  },
}));
export default function OutlineButton({
  text,
  backgroundColor,
  textColor,
  style,
  ...others
}) {
  const cls = useStyles();
  return (
    <Button
      className={cls.root}
      style={{
        ...style,
        backgroundColor: backgroundColor,
        color: textColor,
        borderColor: textColor,
      }}
      {...others}
    >
      {text}
    </Button>
  );
}
