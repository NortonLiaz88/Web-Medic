import React, { useCallback, useState } from "react";
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

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import logo from "../../assets/img/web-medic-logo.svg";
import coverImg from "../../assets/img/logo.svg";
import { InputForm } from "../../components/Form/InputForm";
import { useForm } from "react-hook-form";
import ReactLoading from "react-loading";
import { useAuth } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import { useToast } from "../../context/ToastContext";
import getValidationErrors from "../../utils/getValidationError";


const schema = Yup.object().shape({
  email: Yup.string()
    .required("E-mail obrigatório")
    .email("Digite um e-mail válido"),
  password: Yup.string().required("Senha obrigatória"),
});

const SignIn: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const { signIn } = useAuth();
  const { addToast, removeToast } = useToast();


  const handleSendForm = useCallback(async (form) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    
    try {
      await signIn!({
        email: form.email,
        password: form.password,
      });

      history.push('/menu-patient');
      
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        return;
      }
      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login, cheque as credenciais.'
      });
    }
  }, [signIn, addToast, history]);

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
          Not have an account?
          <NavigateToSignUp to="/signup-patient">Register</NavigateToSignUp>
        </SecondaryTitle>
        <HorizontalDivider></HorizontalDivider>

        <InputForm name="email" control={control} label="Email"></InputForm>
        <InputForm
          name="password"
          type="password"
          control={control}
          label="Password"
        ></InputForm>
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
              <TextButton>Entrar</TextButton>
            )}
          </RegisterButton>
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
