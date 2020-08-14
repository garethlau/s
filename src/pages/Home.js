import React, { useContext } from "react";
import { store, actions } from "../store";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../components/Footer";

import PanelOne from "../components/PanelOne";
import PanelTwo from "../components/PanelTwo";
import PanelThree from "../components/PanelThree";
import PanelFour from "../components/PanelFour";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    display: "grid",
    gridTemplateRows: "auto 225px",
    overflowX: "hidden",
  },
}));

export default function Home() {
  const { state, dispatch } = useContext(store);

  const cls = useStyles();
  return (
    <div className={cls.root}>
      <div>
        {state.page === 0 && <PanelOne />}
        {state.page === 1 && <PanelTwo />}
        {state.page === 2 && <PanelThree />}
        {state.page === 3 && <PanelFour />}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
