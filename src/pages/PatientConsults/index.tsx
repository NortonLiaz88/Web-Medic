import React, { useCallback, useEffect, useState } from "react";
import Consults from "../../components/Consults";
import { useToast } from "../../context/ToastContext";
import api from "../../services/apiClient";

const PatientConsults: React.FC = () => {
  const [consultList, setConsultList] = useState([]);
  const { addToast } = useToast();
  const token = localStorage.getItem("@WebMedic:token");
  // const getAllConsults = useCallback(async () => {
  //   try{
  //     const data = await api.get(`WebMedic/minhas-consultas/${token}` ,{
  //       baseURL: "http://25.51.114.54:8000", // Base URL
  //     });
  //       setConsultList(data);
  //   }catch{
  //     addToast({
  //       type: "error",
  //       title: "Erro na listagem",
  //     });
  //   }
   
  // }, [consults]);

  useEffect(() => {
    api
      .get(`WebMedic/minhas-consultas/${token}`,{baseURL: "http://25.51.114.54:8000",})
      .then((response) => setConsultList(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <Consults
     dataList={consultList}
    ></Consults>
  );
};

export default PatientConsults;
