import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { InputForm } from "../../components/Form/InputForm";
import { SelectForm } from "../../components/Form/SelectForm";
import { TextAreaForm } from "../../components/Form/TextAreaForm";

import {
  Container,
  Header,
  FormContainer,
  Form,
  Section,
  TitleHeader,
  HorizontalDivider,
  StyledLink,
  PeriodContainer,
  Title,
} from "./styles";

import { FormFooter } from "../../components/FormFooter";
import { TimeForm } from "../../components/Form/TimeForm";
import { DatePickerForm } from "../../components/Form/DatePickerForm";
import { NavigationBack } from "../../components/NavigationBack";
import { ISelectOptions } from "../../utils/ISelectOptions";
import { useHistory } from "react-router-dom";
import { useToast } from "../../context/ToastContext";
import api from "../../services/apiClient";
import getValidationErrors from "../../utils/getValidationError";
import { formatISO, formatRFC3339, setHours, setMinutes } from "date-fns";

const options: ISelectOptions[] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const specialityDoctor: ISelectOptions[] = [
 {label: "Acupuntura", value: "Acupuntura"},
 {label: "Alergia", value:  "Alergia"},
 {label: "Anestesiologista", value: "Anestesiologista"},
 {label: "Angiologia", value: "Angiologia"},
 {label: "Cardiologia", value: "Cardiologia"},
 {label: "Cirurgia Cardiovascular", value: "Cirurgia Cardiovascular"},
 {label: "Cirurgia de Mão", value: "Cirurgia de Mão"},
 {label: "Cirurgia de Cabeça", value: "Cirurgia de Cabeça"},
 {label: "Cirurgia do Aparelho Digestivo", value: "Cirurgia do Aparelho Digestivo"},
 {label: "Cirurgia Geral", value: "Cirurgia Geral"},
 {label: "Cirurgia Oncológica", value: "Cirurgia Oncológica"},
 {label: "Cirurgia Pediátrica", value: "Cirurgia Pediátrica"},
 {label: "Cirurgia Plástica", value: "Cirurgia Plástica"},
 {label: "Cirurgia Torácica", value: "Cirurgia Torácica"},
 {label: "Cirurgia Vascular", value: "Cirurgia Vascular"},
 {label: "Clínica Médica", value: "Clínica Médica"},
 {label: "Coloproctologia", value: "Coloproctologia"},
 {label: "Dermatologia", value: "Dermatologia"},
 {label: "Endocrinologia", value: "Endocrinologia"},
 {label: "Endoscopia", value: "Endoscopia"},
 {label: "Gastroenterologia", value: "Gastroenterologia"},
 {label: "Genética Médica", value: "Genética Médicue"},
 {label: "Geriatria", value: "Geriatria"},
 {label: "Ginecologia", value: "Ginecologia"},
 {label: "Hematologia", value: "Hematologia"},
 {label: "Homeopatia", value: "Homeopatia"},
 {label: "Infectologia", value: "Infectologia"},
 {label: "Mastologia", value: "Mastologia"},
 {label: "Medicina de Emergência" , value: "Medicina de Emergência"},
 {label: "Medicina de Família" , value: "Medicina de Família" },
 {label: "Medicina do Trabalho" , value: "Medicina do Trabalho"},
 {label: "Medicina de Tráfego" , value:  "Medicina de Tráfego"},
 {label: "Medicina Esportiva", value:  "Medicina Esportiva"},
 {label: "Medicina Física", value: "Medicina Física"},
 {label: "Medicina Intensiva", value: "Medicina Intensiva"},
 {label: "Medicina Legal", value: "Medicina Legal"},
 {label: "Medicina Nuclear", value: "Medicina Nuclear"},
 {label: "Medicina Preventiva", value: "Medicina Preventiva"},
 {label: "Nefrologia", value:"Nefrologia"},
 {label: "Neurocirurgia", value:"Neurocirurgia"},
 {label: "Neurologia", value:"Neurologia"},
 {label: "Nutrologia", value:"Nutrologia"},
 {label: "Oftalmologia", value:"Oftalmologia"},
 {label: "Oncologia Clínica", value: "Oncologia Clínica"},
 {label: "Ortopedia e Traumatologia" , value: "Ortopedia e Traumatologia"},
 {label: "Otorrinolaringologia", value: "Otorrinolaringologia"},
 {label: "Patologia", value: "Patologia"},
 {label: "Patologia Clínica", value: "Patologia Clínica"},
 {label: "Pediatria", value: "Pediatria"},
 {label: "Pneumologia", value: "Pneumologia"},
 {label: "Psiquiatria", value: "Psiquiatria"},
 {label: "Radiologia", value: "Radiologia"},
 {label: "Radioterapia", value: "Radioterapia"},
 {label: "Reumatologia", value: "Reumatologia"},
 {label: "Urologia", value: "Urologia"}
]


const schema = Yup.object().shape({
  name: Yup.string().required(),
  data_nascimento: Yup.date().required(),
  cpf: Yup.string().required(),
  speciality: Yup.string().required(),
  doctor: Yup.string().required(),
  description: Yup.string().required(),
  date: Yup.date().required(),
  hour: Yup.string().required(),
});

const PatientConsult: React.FC = () => {
  const [name, setName] = useState("");
  const [data_nascimento, setdata_nascimento] = useState(new Date());
  const [cpf, setCPF] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [doctor, setDoctor] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const history = useHistory();
  const { addToast } = useToast();

  function handledata_nascimentoChange(date) {
    setdata_nascimento(date);
  }
  function handleDateChange(date) {
    setDate(date);
  }
  
  const handleSendForm = useCallback(async (form) => {
    const hour = form.time.split(':');
    const isoDate = formatISO(new Date(form.date));
    console.log(form);
    console.log(isoDate);
    const formatDate = formatISO(date);
    const letDate = setHours(new Date(formatDate), hour[0]);
    const finalDate = setMinutes(new Date(letDate), hour[1]);
    console.log('Date ==>', letDate);

    const data = {
      especialidade: form.speciality,
      doctor: form.doctor,
      doenca: form.description,
      data_consulta: finalDate,
    };
    console.log('Data', data);
    try {
      await api.post("WebMedic/Paciente/appointment", data ,{
        baseURL: "http://25.51.114.54:8000", // Base URL
      });
      // await api.post("WebMedic/Paciente", form)
      history.push("/menu-patient");

      addToast({
        type: "success",
        title: "Cadastro realizado !",
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        form.current?.setErrors(errors);
        return;
      }
      addToast({
        type: "error",
        title: "Erro no Cadastro",
      });
    }
  }, []);

  const loadSpecialtyOptions = (
    inputValue: string,
    callback: (options: ISelectOptions[]) => void
  ) => {
    setTimeout(() => {
      callback(options);
    }, 1000);
  };

  const loadDoctorOptions = (
    inputValue: string,
    callback: (options: ISelectOptions[]) => void
  ) => {
    setTimeout(() => {
      callback(options);
    }, 1000);
  };

  return (
    <Container>
      <Header>
        <NavigationBack></NavigationBack>
        <TitleHeader>Cadastro de consulta</TitleHeader>
      </Header>
      <FormContainer>
        <Form>
          <Section>
            <Title>Escolha uma especialidade</Title>
            <HorizontalDivider></HorizontalDivider>
            <SelectForm
              name="speciality"
              control={control}
              label="Especialidade"
              options={specialityDoctor}
            ></SelectForm>
            <StyledLink to="/">Verificar perfis médicos</StyledLink>
            <SelectForm
              name="doctor"
              control={control}
              label="Médico"
              options={options}
            ></SelectForm>
            <TextAreaForm
              name="description"
              control={control}
              label="Descrição dos sintomas"
              rows={9}
            ></TextAreaForm>
          </Section>

          <Section>
            <Title>Horários disponíveis</Title>
            <HorizontalDivider></HorizontalDivider>
            <PeriodContainer>
              <DatePickerForm
                name="date"
                label="Dia"
                control={control}
                selected={date}
                onChange={(date) => handleDateChange(date)}
              ></DatePickerForm>
              <TimeForm name="time" control={control}></TimeForm>
            </PeriodContainer>
          </Section>
        </Form>
        <FormFooter buttonPress={handleSubmit(handleSendForm)}></FormFooter>
      </FormContainer>
    </Container>
  );
};

export default PatientConsult;
