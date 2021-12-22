import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import PatientConsult from "../pages/RegisterPatientConsult";

const Routes: React.FC = () => (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/consult" component={PatientConsult} />
    </Switch>
);

export default Routes;
