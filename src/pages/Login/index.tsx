import { useEffect, useState } from "react";
import { LoginForm } from "../../components/Forms/LoginForm";
import { LoginMainDivStyled } from "./style";

const TypeAnimation = ({ sequence }: any) => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < sequence[0].length) {
      const timer = setTimeout(() => {
        setText((prevText) => prevText + sequence[0][currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 200); // Tempo de espera entre cada letra (ajuste conforme necessário)
      return () => clearTimeout(timer);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setText("");
      }, 1000); // Tempo de espera antes de iniciar a deleção da frase
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, sequence]);

  return <>{text}</>;
};

export const Login = () => {
  return (
    <LoginMainDivStyled>
      <section className="leftSection">
        <div className="textContainer">
          <p>
            <span>&lt;</span> p <span>&gt;</span>
          </p>
          <br />
          <p>
            <TypeAnimation
              sequence={["Keep all your Dev friends even closer!"]}
            />
          </p>
          <br />
          <p>
            <span>&lt;</span> /p <span>&gt;</span>
          </p>
        </div>
      </section>
      <section className="rightSection">
        <LoginForm />
      </section>
    </LoginMainDivStyled>
  );
};
