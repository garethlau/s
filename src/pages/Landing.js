import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../constants";
import CButton from "../components/CButton";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  },
  img: {
    width: "100vw",
    objectFit: "cover",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "640px",
    height: "auto",
    backgroundColor: Colors.WHITE,
    boxShadow: theme.shadows[15],
    textAlign: "center",
    borderRadius: "10px",
    padding: "20px",
    "& h1": {
      margin: "30px 0 0",
    },
    "& h4": {
      margin: "0 0 30px",
    },
    "& p": {
      opacity: 0.7,
      margin: "20px 0",
      fontSize: "16px",
    },
  },
}));

export default function Home() {
  const cls = useStyles();
  const history = useHistory();
  return (
    <div className={cls.root}>
      <img
        className={cls.img}
        src={require("../assets/splash.svg")}
        alt="Screenshots of ScotiaRise"
      />
      <div className={cls.content}>
        <h1>ScotiaRise</h1>
        <h4>Fostering The Investors In Tommorow</h4>
        <CButton
          text="Start"
          textColor={Colors.WHITE}
          backgroundColor={Colors.RED}
          onClick={() => history.push("/onboard")}
        />
        <p>Made By: Alyssa Yan, Connie Yao, Gareth Lau, Justin Zhang</p>
      </div>
    </div>
  );
}
