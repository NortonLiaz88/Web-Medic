import { formatISO, formatRFC3339 } from "date-fns";
import React, { useCallback, useEffect, useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { FiX, FiPlus } from "react-icons/fi";
import DatePicker, { DayRange, utils } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { DatePickerForm } from "../../components/Form/DatePickerForm";
import { InputForm } from "../../components/Form/InputForm";
import { SelectForm } from "../../components/Form/SelectForm";
import { FormFooter } from "../../components/FormFooter";
import { NavigationBack } from "../../components/NavigationBack";
import api from "../../services/apiClient";
import getValidationErrors from "../../utils/getValidationError";
import { ISelectOptions } from "../../utils/ISelectOptions";

import {
  AddButton,
  CloseButton,
  Container,
  Form,
  FormContainer,
  Header,
  HorizontalDivider,
  Papa,
  Section,
  SectionHeader,
  Select,
  SelectContainer,
  SpecialityContainer,
  Title,
  TitleHeader,
} from "./styles";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useToast } from "../../context/ToastContext";

export interface IValues {
  value: string;
}

export const specialityDoctor: ISelectOptions[] = [
  { label: "Acupuntura", value: "Acupuntura" },
  { label: "Alergia", value: "Alergia" },
  { label: "Anestesiologista", value: "Anestesiologista" },
  { label: "Angiologia", value: "Angiologia" },
  { label: "Cardiologia", value: "Cardiologia" },
  { label: "Cirurgia Cardiovascular", value: "Cirurgia Cardiovascular" },
  { label: "Cirurgia de Mão", value: "Cirurgia de Mão" },
  { label: "Cirurgia de Cabeça", value: "Cirurgia de Cabeça" },
  {
    label: "Cirurgia do Aparelho Digestivo",
    value: "Cirurgia do Aparelho Digestivo",
  },
  { label: "Cirurgia Geral", value: "Cirurgia Geral" },
  { label: "Cirurgia Oncológica", value: "Cirurgia Oncológica" },
  { label: "Cirurgia Pediátrica", value: "Cirurgia Pediátrica" },
  { label: "Cirurgia Plástica", value: "Cirurgia Plástica" },
  { label: "Cirurgia Torácica", value: "Cirurgia Torácica" },
  { label: "Cirurgia Vascular", value: "Cirurgia Vascular" },
  { label: "Clínica Médica", value: "Clínica Médica" },
  { label: "Coloproctologia", value: "Coloproctologia" },
  { label: "Dermatologia", value: "Dermatologia" },
  { label: "Endocrinologia", value: "Endocrinologia" },
  { label: "Endoscopia", value: "Endoscopia" },
  { label: "Gastroenterologia", value: "Gastroenterologia" },
  { label: "Genética Médica", value: "Genética Médicue" },
  { label: "Geriatria", value: "Geriatria" },
  { label: "Ginecologia", value: "Ginecologia" },
  { label: "Hematologia", value: "Hematologia" },
  { label: "Homeopatia", value: "Homeopatia" },
  { label: "Infectologia", value: "Infectologia" },
  { label: "Mastologia", value: "Mastologia" },
  { label: "Medicina de Emergência", value: "Medicina de Emergência" },
  { label: "Medicina de Família", value: "Medicina de Família" },
  { label: "Medicina do Trabalho", value: "Medicina do Trabalho" },
  { label: "Medicina de Tráfego", value: "Medicina de Tráfego" },
  { label: "Medicina Esportiva", value: "Medicina Esportiva" },
  { label: "Medicina Física", value: "Medicina Física" },
  { label: "Medicina Intensiva", value: "Medicina Intensiva" },
  { label: "Medicina Legal", value: "Medicina Legal" },
  { label: "Medicina Nuclear", value: "Medicina Nuclear" },
  { label: "Medicina Preventiva", value: "Medicina Preventiva" },
  { label: "Nefrologia", value: "Nefrologia" },
  { label: "Neurocirurgia", value: "Neurocirurgia" },
  { label: "Neurologia", value: "Neurologia" },
  { label: "Nutrologia", value: "Nutrologia" },
  { label: "Oftalmologia", value: "Oftalmologia" },
  { label: "Oncologia Clínica", value: "Oncologia Clínica" },
  { label: "Ortopedia e Traumatologia", value: "Ortopedia e Traumatologia" },
  { label: "Otorrinolaringologia", value: "Otorrinolaringologia" },
  { label: "Patologia", value: "Patologia" },
  { label: "Patologia Clínica", value: "Patologia Clínica" },
  { label: "Pediatria", value: "Pediatria" },
  { label: "Pneumologia", value: "Pneumologia" },
  { label: "Psiquiatria", value: "Psiquiatria" },
  { label: "Radiologia", value: "Radiologia" },
  { label: "Radioterapia", value: "Radioterapia" },
  { label: "Reumatologia", value: "Reumatologia" },
  { label: "Urologia", value: "Urologia" },
];

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const DoctorConsult: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [name, setName] = useState("");
  const [data_nascimento, setdata_nascimento] = useState(new Date());
  const [crm, setCRM] = useState("");
  const [value, setValue] = useState("");
  const [period, setDayRange] = React.useState<DayRange>({
    from: null,
    to: null,
  });
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setfinalDate] = useState("");
  const token = localStorage.getItem("@WebMedic:token");
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");

  const history = useHistory();
  const { addToast } = useToast();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "speciality",
  });

  function handlePeriodChange(array) {
    console.log(array);
    setDayRange(array);
    const initial = formatRFC3339(
      new Date(array?.from?.year, array?.from?.month - 1, array?.from?.day)
    );
    if (!!array?.to) {
      const final = formatRFC3339(
        new Date(array?.to?.year, array?.to?.month - 1, array?.to?.day)
      );
      setTimeout(() => {
        setInitialDate(initial);
        setfinalDate(final);
      });
      console.log("initial & finaçl", initialDate, finalDate);
      return;
    }
  }

  const handleSendForm = useCallback(async (form) => {
    console.log("Formulário", form);
    let specialitys: Array<string> = [];
    const values: IValues[] = Object.values(form.speciality);
    values.forEach((value) => {
      specialitys.push(value.value);
    });
    const data = {
      valor_hora: form.value,
      agenda: {
        start: "2021-12-10T00:00:00-04:00",
        end: " 2021-12-31T00:00:00-04:00",
      },
      areas_atuacao: specialitys,
    };
    console.log("data", data);

    console.log("Data", form);
    try {
      await api.post(`WebMedic/Medico-agenda/${token}`, data, {
        baseURL: "http://25.51.114.54:8000", // Base URL
      });
      // await api.post("WebMedic/Paciente", form)
      history.push("/menu-doctor");

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

  const [formValues, setFormValues] = useState([{ speciality: "" }]);

  const renderCustomInput = ({ ref }) => (
    <input
      readOnly
      ref={ref} // necessary
      value={`${initialDate} - ${finalDate}`}
      style={{
        textAlign: "initial",
        padding: "0 1rem",
        border: "2px solid #E6E6F0",
        borderRadius: "10px",
        color: "#666360",
        outline: "none",
        height: "56px",
        width: "100%",
        background: "#FAFAFC",
        fontSize: "16px",
      }}
      className="my-custom-input-class" // a styling class
    />
  );

  function handledata_nascimentoChange(date) {
    setdata_nascimento(date);
  }

  let handleChange = (i, e) => {
    console.log("O que temos", i, e);
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { speciality: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  const loadSpecialtyOptions = (
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
        <TitleHeader>Cadastro médico</TitleHeader>
      </Header>
      <FormContainer>
        <Form>
          <Section>
            <SectionHeader>
              <Title>Áreas de atuação</Title>
              <AddButton
                className="button add"
                type="button"
                onClick={() => append({ value: "" })}
              >
                <FiPlus></FiPlus>
                Adicionar área de atuação
              </AddButton>
            </SectionHeader>
            <HorizontalDivider></HorizontalDivider>
            {/* {formValues.map((element, index) => (
              <SpecialityContainer key={index}>
                <SelectForm
                  key={index}
                  name={"name" + index}
                  control={control}
                  label="Especialidade"
                  options={specialityDoctor}
                  value={element.speciality}
                  // onChange={(e) => handleChange(index, e)}
                ></SelectForm>
                {index ? (
                  <CloseButton
                    type="button"
                    onClick={() => removeFormFields(index)}
                  >
                    <FiX style={{ marginTop: "32" }}></FiX>
                  </CloseButton>
                ) : null}
              </SpecialityContainer>
            ))} */}

            {fields.map((item, index) => (
              // Make sure you set the key to something unqiue
              <Controller
                name={`speciality.${index}.value`}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Papa key={index}>
                    <SelectContainer>
                      <Select onChange={onChange}>
                        {specialityDoctor.map((e, key) => {
                          return (
                            <option key={key} value={e.value}>
                              {e.label}
                            </option>
                          );
                        })}
                      </Select>
                    </SelectContainer>

                    {index ? (
                      <CloseButton type="button" onClick={() => remove(index)}>
                        <FiX style={{ marginTop: "32" }}></FiX>
                      </CloseButton>
                    ) : null}
                  </Papa>
                )}
              />
            ))}
          </Section>
          <Section>
            <Title>Personalizar Horarios</Title>
            <DatePicker
              renderInput={renderCustomInput}
              value={period}
              onChange={handlePeriodChange}
            />
          </Section>
          <Section>
            <Title>Preço hora</Title>
            <HorizontalDivider></HorizontalDivider>
            <InputForm name="value" control={control} label="Valor"></InputForm>
          </Section>
        </Form>
        <FormFooter buttonPress={handleSubmit(handleSendForm)}></FormFooter>
      </FormContainer>
    </Container>
  );
};

export default DoctorConsult;
