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
} from "./styles";
import logo from "../../assets/img/web-medic-logo.svg";
import coverImg from "../../assets/img/logo.svg";
import { InputForm } from "../../components/Form/InputForm";
import api from "../../services/apiClient";
import { useHistory } from "react-router-dom";
import { useToast } from "../../context/ToastContext";
import getValidationErrors from "../../utils/getValidationError";

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

const SignUp: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [loading, setLoading] = useState(false);
  
  const history = useHistory();
  const { addToast } = useToast();

  const handleSendForm = useCallback(async (form) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    try {
      await api.post("/users", form);

      history.push("/");

      addToast({
        type: "success",
        title: "Cadastro realizado !",
        description: "Você já pode fazer seu logon no GoBarber",
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
          <NavigateToSignUp to="/">Login</NavigateToSignUp>
        </SecondaryTitle>
        <HorizontalDivider></HorizontalDivider>

        <InputForm name="name" control={control} label="Email"></InputForm>
        <InputForm
          name="password"
          type="password"
          control={control}
          label="Password"
        ></InputForm>

        <InputForm
          name="confirmPassword"
          type="password"
          control={control}
          label="Confirm Passwords"
        ></InputForm>
        <CheckBoxLabel>
          <CheckBox></CheckBox>
          Concordo com os termos serviço e a politica de privacidade.
        </CheckBoxLabel>
        <ButtonContainer>
          <RegisterButton onClick={handleSendForm}>
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

export default SignUp;
