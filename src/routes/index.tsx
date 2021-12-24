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
import SignInDoctor from "../pages/SignInDoctor";
import SignUp from "../pages/SignUp";
import SignUpDoctor from "../pages/SignUpDoctor";

const Routes: React.FC = () => (
    <Switch>
      <Route path="/signIn-patient" component={SignIn} />
      <Route path="/signIn-doctor" component={SignInDoctor} />
      <Route path="/signup-patient" component={SignUp} />
      <Route path="/signup-doctor" component={SignUpDoctor} />
      <Route path="/" exact  component={Home} />
      <Route path="/patient-consult" component={PatientConsult} />
      <Route path="/menu-patient" component={PatientMenu}/>
      <Route path="/menu-doctor" component={DoctorMenu}/>
      <Route path="/doctor-avaliabilty" component={DoctorConsult} />
      <Route path="/my-consults-doctor" component={DoctorConsults} />
      <Route path="/my-consults-patient" component={PatientConsults} />      
    </Switch>
);

export default Routes;
