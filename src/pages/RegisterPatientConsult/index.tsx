import React, { useState } from "react";
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

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const schema = Yup.object().shape({
  name: Yup.string().required(),
  birthday: Yup.date().required(),
  cpf: Yup.string().required(),
  speciality: Yup.string().required(),
  doctor: Yup.string().required(),
  description: Yup.string().required(),
  date: Yup.date().required(),
  hour: Yup.string().required(),
});

const PatientConsult: React.FC = () => {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState(new Date());
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
  } = useForm();

  function handleBirthdayChange(date) {
    setBirthday(date);
  }
  function handleDateChange(date) {
    setDate(date);
  }

  function handleRegister(form) {
    console.log('data');
    const data = {
      name: form.name,
      birthday: form.birthday,
      cpf: form.cpf,
      speciality: form.speciality,
      doctor: form.doctor,
      description: form.description,
      date: form.date,
      hour: form.hour,
    };
    try {
    } catch (error) {}
  }

  return (
    <Container>
      <Header>
        <NavigationBack></NavigationBack>
        <TitleHeader>Cadastro de consulta</TitleHeader>
      </Header>
      <FormContainer>
        <Form>
          <Section>
            <Title>Seus dados</Title>
            <HorizontalDivider></HorizontalDivider>
            <InputForm name="name" control={control} label="Nome completo"></InputForm>
            <InputForm name="cpf" control={control} label="CPF"></InputForm>
            <DatePickerForm
                name="birthday"
                label='Data de nascimento'
                control={control}
                selected={birthday}
                onChange={(date) => handleBirthdayChange(date)}
              ></DatePickerForm>
          </Section>

          <Section>
            <Title>Escolha uma especialidade</Title>
            <HorizontalDivider></HorizontalDivider>
            <SelectForm name="speciality" control={control} label="Especialidade" options={options}></SelectForm>
            <StyledLink to="/">Verificar perfis médicos</StyledLink>
            <SelectForm name="doctor" control={control} label="Médico" options={options}></SelectForm>
            <TextAreaForm
              name="descriptio"
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
                label='Dia'
                control={control}
                selected={date}
                onChange={(date) => handleDateChange(date)}
              ></DatePickerForm>
              <TimeForm name="time" control={control}></TimeForm>
            </PeriodContainer>
          </Section>
        </Form>
        <FormFooter buttonPress={handleSubmit(handleRegister)}></FormFooter>
      </FormContainer>
    </Container>
  );
};

export default PatientConsult;
