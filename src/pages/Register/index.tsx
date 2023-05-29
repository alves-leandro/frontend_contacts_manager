import { useEffect, useState } from "react";
import { RegisterForm } from "../../components/Forms/RegisterForm";
import { RegisterMainDivStyled } from "./style";

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

export const Register = () => {
  return (
    <RegisterMainDivStyled>
      <section className="leftSection">
        <RegisterForm />
      </section>
      <section className="rightSection">
        <div className="textContainer">
          <p>
            <span>&lt;</span> p <span>&gt;</span>
          </p>
          <br />
          <p>
            <TypeAnimation
              sequence={["Don't forget to register your friends' social networks!"]}
            />
          </p>
          <br />
          <p>
            <span>&lt;</span> /p <span>&gt;</span>
          </p>
        </div>
      </section>
    </RegisterMainDivStyled>
  );
};
