import React, { Suspense } from "react";
import { StateProvider } from "./store";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const Result = React.lazy(() => import("./pages/Result"));

function App() {
  return (
    <StateProvider>
      <Router>
        <Switch>
          <Suspense fallback={null}>
            <Route path="/" exact component={Home} />
            <Route path="/result" component={Result} />
          </Suspense>
        </Switch>
      </Router>
    </StateProvider>
  );
}

export default App;
