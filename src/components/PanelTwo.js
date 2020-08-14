import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../constants";
import CInput from "./CInput";
import CButton from "./CButton";
import { store, actions } from "../store";
import useFormInput from "../hooks/useFormInput";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: Colors.GREEN,
    height: "100%",
    width: "100%",
  },
  titleContainer: {
    maxWidth: "600px",
  },
  content: {
    padding: "50px 0 0 100px",
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
    width: "1040px",
    marginBottom: "20px",
  },
  option: {
    backgroundColor: Colors.WHITE,
    borderRadius: "10px",
    height: "100px",
    padding: "50px 30px",
    "& p": {
      color: Colors.BLACK,
      margin: 0,
      fontWeight: "bold",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export default function PanelTwo() {
  const firstName = useFormInput("");
  const cls = useStyles();
  const [step, setStep] = useState(0);
  const [age, setAge] = useState("18-21");

  const { state, dispatch } = useContext(store);

  function next() {
    if (step === 0) {
      dispatch({ type: actions.SET_FIRST_NAME, payload: firstName.value });
      setStep(1);
    } else {
      dispatch({ type: actions.SET_AGE, payload: age });
      dispatch({ type: actions.NEXT_PAGE });
    }
  }

  return (
    <div className={cls.root}>
      <div className={cls.content}>
        <div className={cls.titleContainer}>
          <h1>Let's Get To Know Each Other</h1>
        </div>
        {step === 0 ? (
          <>
            <p>What's your first name?</p>
            <div className={cls.input}>
              <CInput onChange={firstName.onChange} value={firstName.value} />
            </div>
          </>
        ) : (
          <>
            <p>Nice to meet you {state.firstName}, what is your age?</p>
            <div className={cls.optionsContainer}>
              {["18-21", "22-24", "25-29", "30+"].map((x, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setAge(x);
                    }}
                    className={cls.option}
                    style={{
                      border: age === x ? "5px solid red" : "5px solid white",
                    }}
                  >
                    <p>{x}</p>
                    <p>Years Old</p>
                  </div>
                );
              })}
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
