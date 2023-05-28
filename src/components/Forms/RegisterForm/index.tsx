import { useForm } from "react-hook-form";
import { Input } from "../../../styles/Input";
import { FormRegisterStyled } from "./style";
import { StyledButton } from "../../../styles/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterData, schema } from "./validator";
import { useAuth } from "../../../hooks/useAuth";
import { LinkStyled } from "../../../styles/Link";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(schema),
  });

  const { signUp } = useAuth();

  return (
    <FormRegisterStyled onSubmit={handleSubmit(signUp)}>
      <h1>Cadastro</h1>
      <div className="headerRegisterForm">
        <LinkStyled linksize="default" linkstyle="disabled" to={"/login"}>Retornar para o login</LinkStyled>
      </div>

      <Input
        className="input"
        label="Nome"
        id="name"
        type="text"
        placeholder=""
        register={register("name")}
      />
      <span>{errors.name?.message}</span>

      <Input
        className="input"
        label="Email"
        id="email"
        type="email"
        placeholder=""
        register={register("email")}
      />
      <span>{errors.email?.message}</span>

      <Input
        className="input"
        label="Senha"
        id="password"
        type="password"
        placeholder=""
        register={register("password")}
      />
      <span>{errors.password?.message}</span>

      <Input
        className="input"
        label="Telefone"
        id="phone"
        type="text"
        placeholder=""
        register={register("phone")}
      />
      <span>{errors.password?.message}</span>

      <StyledButton
        buttonsize="form"
        buttonstyle="form"
        type="submit"
      >
        Cadastrar
      </StyledButton>
    </FormRegisterStyled>
  );
};
