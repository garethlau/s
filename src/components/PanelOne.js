import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../constants";
import { actions, store } from "../store";

import CButton from "./CButton";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },

  left: {
    backgroundColor: Colors.RED,
    padding: "50px 0 0 100px",
    "& h1": {
      color: Colors.WHITE,
    },
    "& p": {
      color: Colors.WHITE,
    },
  },
  right: {
    backgroundColor: Colors.PINK,
  },
  logo: {
    width: "200px",
    height: "200px",
  },
}));

export default function PanelOne() {
  const { state, dispatch } = useContext(store);
  function nextPage() {
    dispatch({type: actions.NEXT_PAGE});
  }
  const cls = useStyles();
  return (
    <div className={cls.root}>
      <div className={cls.left}>
        <img
          src={require("../assets/scotia-logo.svg")}
          alt="ScotiaBank Logo"
          className={cls.logo}
        />
        <h1>Start Your Financial Journey In 3 Minutes</h1>
        <p>
          Get <b>$100</b> in free trades when you get started on Scotiabank
          iTrade.
        </p>
        <CButton
          onClick={nextPage}
          backgroundColor={Colors.WHITE}
          textColor="#000000"
          text="Let's Go!"
        />
      </div>
      <div className={cls.right}>
        <img
          src={require("../assets/red-sweater-person-1.png")}
          alt="Person in red sweater"
        />
      </div>
    </div>
  );
}
