import { RegisterForm } from "../../components/Forms/RegisterForm";
import { RegisterMainDivStyled } from "./style";

export const Register = () => {
  return (
    <RegisterMainDivStyled>
      <section className="leftSections"></section>
      <section className="rightSection">
        <RegisterForm />
      </section>
    </RegisterMainDivStyled>
  );
};
