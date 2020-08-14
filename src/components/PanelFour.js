import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../constants";
import CButton from "./CButton";
import { store, actions } from "../store";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: Colors.PURPLE,
    height: "100%",
    width: "100%",
  },
  titleContainer: {
    maxWidth: "960px",
    "& h1": {
      margin: 0,
    },
  },
  content: {
    padding: "50px 100px 0 100px",
    "& h1": {
      color: Colors.WHITE,
    },
    "& p": {
      color: Colors.WHITE,
    },
  },
  input: {
    marginBottom: "30px",
  },
  optionsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "20px",
    width: "1200px",
    marginBottom: "20px",
  },
  option: {
    backgroundColor: Colors.WHITE,
    borderRadius: "10px",
    height: "200px",
    padding: "20px 20px",
    "& p": {
      color: Colors.BLACK,
      margin: 0,
      fontWeight: "bold",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  body: {
    color: Colors.BLACK,
    margin: 0,
    fontSize: "16px",
    fontWeight: "regular",
  },
}));

const options = [
  {
    title: "Playing it safe",
    body:
      "You are focused on protecting your money and weary about the growth of investing. You may be a bit newer to the scene or may need access to your money in particular times.",
  },
  {
    title: "Balanced Risk",
    body:
      "You have some knowledge on financial information is more open to taking on some risks in order to have your money grow. You are looking to have a balanced portfolio with a mix of products",
  },
  {
    title: "All In",
    body:
      "What keeps you at night is the thought of growth. You are looking for some short term income, but more focused on growth. You are willing to see the ups and downs to see higher rates of return",
  },
];

export default function PanelFour() {
  const { state, dispatch } = useContext(store);
  const [type, setType] = useState(0);
  const cls = useStyles();
  const history = useHistory();

  function next() {
    dispatch({ type: actions.SET_PERSONALITY_TYPE, payload: type });
    dispatch({ type: actions.NEXT_PAGE });
    if (type === 0) {
      history.push("/result?id=fc098bd5fc076aec64de8bfd993dff91");
    } else if (type === 1) {
      history.push("/result?id=91605058f5d8d58d70a5b2430040dee7");
    } else if (type === 2) {
      history.push("/result?id=a5c199dec07f8b7fc16f622b1b1a76f0");
    }
  }
  return (
    <div className={cls.root}>
      <div className={cls.content}>
        <div className={cls.titleContainer}>
          <h1>Final Question, {state.firstName}</h1>
        </div>
        <p>What kind of person are you?</p>
        <div className={cls.optionsContainer}>
          {options.map((x, index) => {
            return (
              <div
                className={cls.option}
                style={{
                  border: index === type ? "5px solid red" : "5px solid white",
                }}
                onClick={() => setType(index)}
              >
                <p>{x.title}</p>
                <p className={cls.body}>{x.body}</p>
              </div>
            );
          })}
        </div>
        <CButton
          text="See Results"
          backgroundColor={Colors.RED}
          textColor={Colors.WHITE}
          onClick={next}
        />
      </div>
    </div>
  );
}
