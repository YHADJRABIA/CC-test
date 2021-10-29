import React from "react";

import { Switch, Route } from "react-router-dom"; //Router

// Components
import Home from "../pages/Home";

const Body = () => {
  return (
    <main>
      <Switch>
        <Route path={["/", "/chefclub"]} exact component={Home} />
      </Switch>
    </main>
  );
};

export default Body;
