import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { store } from "../store";
import { Colors } from "../constants";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  left: {
    padding: "20px 100px",
    "& h1": {
      margin: 0,
    },
    "& p": {
      margin: 0,
    },
  },
  description: {
    fontSize: "26px",
    margin: "20px",
  },
  progressContainer: {
    width: "calc(392px + 80px)",
    height: "84px",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "84px 70px 84px 70px 84px",
    gridGap: "20px",
    paddingTop: "70px",
  },
  circle: {
    borderRadius: "50%",
    width: "84px",
    height: "84px",
    transition: "background-color ease 0.5s",
  },
  line: {
    height: "84px",
    "& div": {
      marginTop: "38px",
      borderRadius: "5px",
      height: "5px",
      backgroundColor: Colors.BLACK,
    },
  },
}));

export default function Footer() {
  const cls = useStyles();
  const { state } = useContext(store);
  return (
    <div className={cls.root}>
      <div className={cls.left}>
        <h1>Powered by ScotiaRise</h1>
        <p>Fostering The Investors In Tomorrow</p>
      </div>
      <div>
        {state.page === 0 ? (
          <p className={cls.description}>
            Personalized news, recommendations, making sure that you’re making
            the best choices with your money. ScotiaRise is the ultimate tool to
            help you plan your future.
          </p>
        ) : (
          <div className={cls.progressContainer}>
            <div
              className={cls.circle}
              style={{
                backgroundColor: state.page >= 1 ? Colors.GREEN : "grey",
              }}
            ></div>
            <div className={cls.line}>
              <div></div>
            </div>

            <div
              className={cls.circle}
              style={{
                backgroundColor: state.page >= 2 ? Colors.BLUE : "grey",
              }}
            ></div>
            <div className={cls.line}>
              <div></div>
            </div>
            <div
              className={cls.circle}
              style={{
                backgroundColor: state.page >= 3 ? Colors.PURPLE : "grey",
              }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}
