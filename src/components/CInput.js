import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../constants";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "transparent",
    borderColor: Colors.WHITE,
    padding: "20px",
    borderRadius: "5px",
    fontSize: "26px",
    border: "solid 5px",
    color: Colors.WHITE,
    "&:focus": {
      outline: "none",
    },
  },
}));

export default function CInput({ ...others }) {
  const cls = useStyles();
  return <input className={cls.root} {...others} />;
}
