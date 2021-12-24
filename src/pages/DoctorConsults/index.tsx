import React, { useCallback, useEffect } from "react";
import Consults from "../../components/Consults";
import { useToast } from "../../context/ToastContext";
import api from "../../services/apiClient";

const DoctorConsults: React.FC = () => {
  let consults;
  const { addToast } = useToast();
  const token = localStorage.getItem("@WebMedic:token");
  const getAllConsults = useCallback(async () => {
    try{
      const data = await api.get(`WebMedic/minhas-consultas/${token}` ,{
        baseURL: "http://25.51.114.54:8000", // Base URL
      });
        consults = data;
    }catch{
      addToast({
        type: "error",
        title: "Erro na listagem",
      });
    }
   
  }, [consults]);

  useEffect(() => {
    getAllConsults();
  }, [])
  return (
    <Consults
      dataList={consults}
    ></Consults>
  );
};

export default DoctorConsults;
