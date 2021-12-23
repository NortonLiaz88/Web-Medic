import React from "react";
import Consults from "../../components/Consults";

const DoctorConsults: React.FC = () => {
  return (
    <Consults
      name="Fulano de tal"
      speciality="Especialidade"
      description="NANANA"
      date="19/12/1999"
    ></Consults>
  );
};

export default DoctorConsults;
