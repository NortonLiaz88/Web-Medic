import React from "react";
import { Switch, Route } from "react-router-dom";
import DoctorMenu from "../pages/DoctorMenu";
import Home from "../pages/Home";
import DoctorConsult from "../pages/RegisterDoctor";
import PatientConsult from "../pages/RegisterPatientConsult";

const Routes: React.FC = () => (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/patient-consult" component={PatientConsult} />
      <Route path="/menu-doctor" component={DoctorMenu}/>
      <Route path="/doctor-avaliabilty" component={DoctorConsult} />
    </Switch>
);

export default Routes;
