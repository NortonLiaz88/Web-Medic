import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import ReactLoading from "react-loading";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Container,
  Cover,
  CoverImg,
  FormContainer,
  Title,
  SecondaryTitle,
  NavigateToSignUp,
  Logo,
  HorizontalDivider,
  CheckBox,
  CheckBoxLabel,
  ButtonContainer,
  RegisterButton,
  TextButton,
  Section,
} from "./styles";
import logo from "../../assets/img/web-medic-logo.svg";
import coverImg from "../../assets/img/logo.svg";
import { InputForm } from "../../components/Form/InputForm";
import api from "../../services/apiClient";
import { useHistory } from "react-router-dom";
import { useToast } from "../../context/ToastContext";
import getValidationErrors from "../../utils/getValidationError";
import { DatePickerForm } from "../../components/Form/DatePickerForm";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required("Nome obrigatório"),
  email: Yup.string()
    .required("E-mail obrigatório")
    .email("Digite um e-mail válido"),
  password: Yup.string().min(6, "No mínimo 6 dígitos"),
});

const SignUpDoctor: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [data_nascimento, setdata_nascimento] = useState(new Date());
  
  function handledata_nascimentoChange(date) {
    setdata_nascimento(date);
  }

  const history = useHistory();
  const { addToast } = useToast();

  const handleSendForm = useCallback(async (form) => {
    setLoading(true);
    try {
      await api.post("WebMedic/Medico-Register", form ,{
        baseURL: "http://25.51.114.54:8000", // Base URL
      });
      // await api.post("WebMedic/Paciente", form)
      history.push("/signIn-doctor");

      addToast({
        type: "success",
        title: "Cadastro realizado !",
        description: "Você já pode fazer seu logon no WebMedic",
      });

      setLoading(false);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        form.current?.setErrors(errors);
        return;
      }
      addToast({
        type: "error",
        title: "Erro no Cadastro",
        description: "Ocorreu um erro ao fazer cadastro, tente novamente.",
      });
    }
  }, []);

  return (
    <Container>
      <Cover>
        <Logo src={logo} />
        <CoverImg src={coverImg} />
        <></>
      </Cover>
      <FormContainer>
        <Title>Get’s started.</Title>
        <SecondaryTitle>
          Already have an account?
          <NavigateToSignUp to="/signIn-doctor">Login</NavigateToSignUp>
        </SecondaryTitle>
        <HorizontalDivider></HorizontalDivider>

        <Section>
            <Title>Seus dados</Title>
            <HorizontalDivider></HorizontalDivider>
            <InputForm
              name="nome"
              control={control}
              label="Nome completo"
            ></InputForm>
            <InputForm name="cpf" control={control} label="CPF"></InputForm>
            <DatePickerForm
              name="data_nascimento"
              label="Data de nascimento"
              control={control}
              selected={data_nascimento}
              onChange={(date) => handledata_nascimentoChange(date)}
            ></DatePickerForm>
          </Section>


        <InputForm name="email" control={control} label="Email"></InputForm>
        <InputForm
          name="password"
          type="password"
          control={control}
          label="Password"
        ></InputForm>

        {/* <InputForm
          name="confirmPassword"
          type="password"
          control={control}
          label="Confirm Passwords"
        ></InputForm> */}
        <CheckBoxLabel>
          <CheckBox></CheckBox>
          Concordo com os termos serviço e a politica de privacidade.
        </CheckBoxLabel>
        <ButtonContainer>
          <RegisterButton onClick={handleSubmit(handleSendForm)}>
            {loading ? (
              <ReactLoading
                type="bubbles"
                color="#fff"
                height={50}
                width={50}
              />
            ) : (
              <TextButton>Registrar</TextButton>
            )}
          </RegisterButton>
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
};

export default SignUpDoctor;
