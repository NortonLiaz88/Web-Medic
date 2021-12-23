import React from "react";
import { Switch, Route } from "react-router-dom";
import Consults from "../components/Consults";
import DoctorConsults from "../pages/DoctorConsults";
import DoctorMenu from "../pages/DoctorMenu";
import Home from "../pages/Home";
import PatientConsults from "../pages/PatientConsults";
import PatientMenu from "../pages/PatientMenu";
import DoctorConsult from "../pages/RegisterDoctor";
import PatientConsult from "../pages/RegisterPatientConsult";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Routes: React.FC = () => (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      
      <Route path="/home" component={Home} />
      <Route path="/patient-consult" component={PatientConsult} />
      <Route path="/menu-patient" component={PatientMenu}/>
      <Route path="/menu-doctor" component={DoctorMenu}/>
      <Route path="/doctor-avaliabilty" component={DoctorConsult} />
      <Route path="/my-consults-doctor" component={DoctorConsults} />
      <Route path="/my-consults-patient" component={PatientConsults} />      
    </Switch>
);

export default Routes;
