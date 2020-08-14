import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../constants";
import { store } from "../store";
import qs from "query-string";
import CButton from "../components/CButton";

import Footer from "../components/Footer";
import OutlineButton from "../components/OutlineButton";

const useStyles = makeStyles((theme) => ({
  root: {},
  banner: {
    padding: "60px 100px",
    backgroundColor: Colors.PURPLE,
    "& h1": {
      color: Colors.WHITE,
    },
    "& p": {
      color: Colors.WHITE,
    },
  },
  recommendations: {
    backgroundColor: Colors.GREY,
    padding: "60px 100px",
    "& h3": {
      opacity: 0.7,
      fontSize: "38px",
      marginBottom: 0,
    },
    "& p": {
      marginTop: 0,
    },
  },
  panel: {
    backgroundColor: Colors.WHITE,
    borderRadius: "10px",
    boxShadow: theme.shadows[10],
    padding: "100px 30px",
    "& h2": {
      opacity: 0.7,
      fontSize: "38px",
      margin: 0,
    },
    "& h1": { margin: 0 },
    "& p": { marginTop: 0 },
  },
}));

const results = {
  a5c199dec07f8b7fc16f622b1b1a76f0: {
    category: "ETF - Technology",
    name: "$SOXL",
    price: "327.31 CAD",
    description:
      "A high-risk, high reward choice that shows 3x the daily movement of the world’s largest semi-conductor and electronics manufacturers.",
    insight:
      "Make sure to constantly buy and sell this stock as it sees a lot of fluctuation!",
  },
  "91605058f5d8d58d70a5b2430040dee7": {
    category: "ETF - General",
    name: "$DMRL",
    price: "79.56 CAD",
    description:
      "A moderate option that tracks the movement of the S&P 500, a collection of the largest companies in the world making this a medium risk pick!",
    insight:
      "This kind of ETF grows at a moderate pace, so make sure to keep an eye on it.",
  },
  fc098bd5fc076aec64de8bfd993dff91: {
    category: "ETC - General",
    name: "$XIC",
    price: "26.33 CAD",
    description:
      "An ETF tracking the entire Canadian stock market. Extremely safe option for long-term growth. Sees moderate returns over a long period of time.",
    insight:
      "This is the kind of investment that you would purchase early on and leave alone.",
  },
};
export default function Result() {
  const [result, setResult] = useState("");
  useEffect(() => {
    const { id } = qs.parse(window.location.search);
    setResult(id);
  }, []);

  const { state } = useContext(store);
  const cls = useStyles();
  return (
    <div>
      <div className={cls.banner}>
        <h1>
          Welcome to your <br /> investing future {state.firstName}
        </h1>
        <p>
          Enjoy $100 in trading credit and weekly insights into what your next
          best move could be!
        </p>
        <CButton
          text="Get Started"
          textColor={Colors.WHITE}
          backgroundColor={Colors.RED}
        />
      </div>
      <div className={cls.recommendations}>
        <h1>Your Weekly Personalized Pick</h1>
        {results[result] ? (
          <div className={cls.panel}>
            <h2>{results[result].category}</h2>
            <h1>{results[result].name}</h1>
            <p>{results[result].price}</p>
            <p>{results[result].description}</p>
            <h2>ScotiaRise Insight</h2>
            <p>{results[result].insight}</p>
            <CButton
              text="See on iTrade"
              backgroundColor={Colors.RED}
              textColor={Colors.WHITE}
            />
            <OutlineButton
              text="Add to Watchlist"
              textColor={Colors.RED}
              backgroundColor={Colors.WHITE}
              style={{ marginLeft: "30px" }}
            />
          </div>
        ) : (
          "loading"
        )}
        <h1>ScotiaRise Learning Tip</h1>
        <h3>P/E Ratio</h3>
        <p>
          The price-earnings ratio, also known as P/E ratio, P/E, or PER, is the
          ratio of a company's share price to the company's earnings per share.
          The ratio is used for valuing companies and to find out whether they
          are overvalued or undervalued.
        </p>
        <CButton
          text="Register"
          textColor={Colors.WHITE}
          backgroundColor={Colors.RED}
        />
      </div>
      <Footer />
    </div>
  );
}
