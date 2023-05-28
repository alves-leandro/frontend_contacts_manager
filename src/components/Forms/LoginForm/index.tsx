import { useForm } from "react-hook-form";
import { Input } from "../../../styles/Input";
import { FormLoginStyled } from "./style";
import { StyledButton } from "../../../styles/Button";
import { LinkStyled } from "../../../styles/Link";
import { LoginData, schema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../../hooks/useAuth";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(schema),
  });

  const { signIn } = useAuth();

  return (
    <FormLoginStyled onSubmit={handleSubmit(signIn)}>
      <h1 className="FormTitle">Login</h1>

      <Input
        className="input"
        label="Email"
        type={"email"}
        placeholder=""
        register={register("email")}
      />
      {errors ? <span>{errors.email?.message}</span> : ""}

      <Input
        className="input"
        label="Senha"
        type={"password"}
        placeholder=""
        register={register("password")}
      />
      <span>{errors.password?.message}</span>
     
      <StyledButton
        buttonsize="form"
        buttonstyle="form"
        type="submit"
      >
        Login
      </StyledButton>

      <div className="goToRegister">
        <div>
          <p> Don't have an account? </p>
        </div>
        <div>
          <LinkStyled linksize="default" linkstyle="disabled" to={"/register"}>
            Click to Register!
          </LinkStyled>
        </div>
      </div>
    </FormLoginStyled>
  );
};
