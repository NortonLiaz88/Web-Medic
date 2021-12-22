import { formatISO, formatRFC3339 } from "date-fns";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiX, FiPlus } from "react-icons/fi";
import DatePicker, { DayRange, utils } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { DatePickerForm } from "../../components/Form/DatePickerForm";
import { InputForm } from "../../components/Form/InputForm";
import { SelectForm } from "../../components/Form/SelectForm";
import { FormFooter } from "../../components/FormFooter";
import { NavigationBack } from "../../components/NavigationBack";

import {
  AddButton,
  CloseButton,
  Container,
  Form,
  FormContainer,
  Header,
  HorizontalDivider,
  Section,
  SectionHeader,
  SpecialityContainer,
  Title,
  TitleHeader,
} from "./styles";

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
  const [birthday, setBirthday] = useState(new Date());
  const [crm, setCRM] = useState("");
  const [dayRange, setDayRange] = React.useState<DayRange>({
    from: null,
    to: null,
  });
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setfinalDate] = useState("");

  function handlePeriodChange(array) {
    console.log(array);
    setDayRange(array);
    const initial = formatRFC3339(
      new Date(array?.from?.year, array?.from?.month, array?.from?.day)
    );
    if (!!array?.to) {
      const final = formatRFC3339(
        new Date(array?.to?.year, array?.to?.month, array?.to?.day)
      );
      setInitialDate(initial);
      setfinalDate(final);
    }
    console.log("initial & finaçl", initialDate, finalDate);
  }

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
        fontSize: '16px',
      }}
      className="my-custom-input-class" // a styling class
    />
  );

  function handleBirthdayChange(date) {
    setBirthday(date);
  }

  function handleRegister(form) {
    console.log("data");
  }

  let handleChange = (i, e) => {
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

  return (
    <Container>
      <Header>
        <NavigationBack></NavigationBack>
        <TitleHeader>Cadastro médico</TitleHeader>
      </Header>
      <FormContainer>
        <Form>
          <Section>
            <Title>Seus dados</Title>
            <HorizontalDivider></HorizontalDivider>
            <InputForm control={control} label="Nome completo"></InputForm>
            <InputForm control={control} label="CRM"></InputForm>
            <DatePickerForm
              label="Data de nascimento"
              control={control}
              selected={birthday}
              onChange={(date) => handleBirthdayChange(date)}
            ></DatePickerForm>
          </Section>
          <Section>
            <SectionHeader>
              <Title>Áreas de atuação</Title>
              <AddButton
                className="button add"
                type="button"
                onClick={() => addFormFields()}
              >
                <FiPlus></FiPlus>
                Adicionar área de atuação
              </AddButton>
            </SectionHeader>
            <HorizontalDivider></HorizontalDivider>
            {formValues.map((element, index) => (
              <SpecialityContainer key={index}>
                <SelectForm
                  label="Especialidade"
                  options={options}
                  value={element.speciality || ""}
                  onChange={(e) => handleChange(index, e)}
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
            ))}
          </Section>
          <Section>
            <Title>Personalizar Horarios</Title>
            <DatePicker
              renderInput={renderCustomInput}
              value={dayRange}
              onChange={handlePeriodChange}
            />
          </Section>
          <Section>
            <Title>Preço hora</Title>
            <HorizontalDivider></HorizontalDivider>
            <InputForm control={control} label="Valor"></InputForm>
          </Section>
        </Form>
        <FormFooter buttonPress={handleSubmit(handleRegister)}></FormFooter>
      </FormContainer>
    </Container>
  );
};

export default DoctorConsult;
