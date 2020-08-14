import React, { useContext, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Colors } from "../constants";
import CButton from "./CButton";
import { store, actions } from "../store";
import Slider from "@material-ui/core/Slider";

const marks = [
  {
    value: 0,
    label: "None",
    str: "I have absolutely no idea what to do - but stocks seem cool!",
  },
  {
    value: 1,
    str: "I keep up with the cool news, and especially Elon Musk's twitter",
  },
  { value: 2, str: "I'm aware of different investment options and risks" },
  { value: 3, label: "Master", str: "I am a master at investing." },
];

const CustomSlider = withStyles({
  root: {
    color: Colors.WHITE,
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: Colors.RED,
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    display: "none",
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,  },

  markLabel: {
    color: Colors.WHITE,
    fontSize: "16px",
  },
})(Slider);

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: Colors.BLUE,
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
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: "20px",
    width: "1200px",
    marginBottom: "20px",
  },
  option: {
    backgroundColor: Colors.WHITE,
    borderRadius: "10px",
    height: "100px",
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
  statement: {
    backgroundColor: Colors.DARK_GREY,
    padding: "20px",
    borderRadius: "10px",
    "& p": {
      margin: 0,
    },
  },
}));

export default function PanelThree() {
  const cls = useStyles();
  const [step, setStep] = useState(0);
  const [reason, setReason] = useState("Education");
  const [investmentKnowledge, setInvestmentKnowledge] = useState(marks[1].str);

  const { dispatch } = useContext(store);

  function next() {
    if (step === 0) {
      dispatch({ type: actions.SET_PRIMARY_REASON, payload: reason });
      setStep(1);
    } else {
      dispatch({ type: actions.NEXT_PAGE });
    }
  }

  return (
    <div className={cls.root}>
      <div className={cls.content}>
        <div className={cls.titleContainer}>
          <h1>What's your future plans?</h1>
          <h1>It's okay to not have any yet!</h1>
        </div>
        {step === 0 ? (
          <>
            <p>What is your main goal for investing?</p>
            <div className={cls.optionsContainer}>
              {[
                "Education",
                "Saving For The Long Term",
                "Travelling",
                "Emergency Fund",
                "Short Term Spending",
              ].map((x) => {
                return (
                  <div
                    className={cls.option}
                    style={{
                      border:
                        reason === x ? "5px solid red" : "5px solid white",
                    }}
                    onClick={() => setReason(x)}
                  >
                    <p>{x}</p>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <p>How would you rate your investment knowledge?</p>
            <div className={cls.statement}>
              <p>{investmentKnowledge}</p>
            </div>
            <div>
              <CustomSlider
                valueLabelDisplay="auto"
                aria-label="slider"
                defaultValue={1}
                onChange={(event, value) => {
                  setInvestmentKnowledge(marks[value].str);
                }}
                marks={marks}
                step={1}
                max={3}
                min={0}
              />
            </div>
          </>
        )}
        <CButton
          textColor={Colors.BLACK}
          backgroundColor={Colors.WHITE}
          text="Next"
          onClick={next}
        />
      </div>
    </div>
  );
}
