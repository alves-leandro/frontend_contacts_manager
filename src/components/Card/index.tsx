import React from "react";
import { CardLiStyled } from "./style";
import { FaGithub, FaLinkedinIn, FaPen } from "react-icons/fa";
import { StyledButton } from "../../styles/Button";

interface CardProps {
  contact: {
    id: string;
    name: string;
    email: string;
    secondEmail: string;
    phone: string;
    secondPhone: string;
    githubUser: string;
    linkedinUser: string;
    portifolioUrl: string;
  };
  onEdit: (contact: any) => void;
}

const Card: React.FC<CardProps> = ({ contact, onEdit }) => {
  const handleEdit = () => {
    onEdit(contact);
  };


  return (
    <CardLiStyled key={contact.id}>
      <div className="mainDiv">
        <section className="imageSection">
          <img
            src={`https://github.com/${contact.githubUser}.png`}
            alt={contact.name}
            title={contact.name}
          />
        </section>
        <section className="infoSection">
          <div className="controlButtons">
            <StyledButton
              buttonsize="card"
              buttonstyle="card"
              onClick={handleEdit}
            >
              <div>
                <FaPen />
              </div>
            </StyledButton>
          </div>
          <div className="cardInformation">
            <p>💻 {contact.name}</p>
            <p>📧 {contact.email}</p>
            {contact.secondEmail && <p>📧 {contact.secondEmail}</p>}
            <p>
              📞{" "}
              <a
                href={`https://api.whatsapp.com/send?phone=+55${contact.phone}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
              >
                {contact.phone}
              </a>
            </p>
            {contact.secondPhone && (
              <p>
                📞{" "}
                <a
                  href={`https://api.whatsapp.com/send?phone=+55${contact.secondPhone}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
                >
                  {contact.secondPhone}
                </a>
              </p>
            )}
          </div>
          <div className="divButtons">
            {contact.githubUser && (
              <StyledButton
                buttonsize="card"
                buttonstyle="card"
                onClick={() =>
                  window.open(
                    `https://github.com/${contact.githubUser}`,
                    "_blank"
                  )
                }
              >
                <div>
                  <FaGithub />
                </div>
              </StyledButton>
            )}

            {contact.linkedinUser && (
              <StyledButton
                buttonsize="card"
                buttonstyle="card"
                onClick={() =>
                  window.open(
                    `https://www.linkedin.com/in/${contact.linkedinUser}`,
                    "_blank"
                  )
                }
              >
                <div>
                  <FaLinkedinIn />
                </div>
              </StyledButton>
            )}

            {contact.portifolioUrl && (
              <StyledButton
                buttonsize="card"
                buttonstyle="card"
                onClick={() => window.open(contact.portifolioUrl, "_blank")}
              >
                Fólio
              </StyledButton>
            )}
          </div>
        </section>
      </div>
    </CardLiStyled>
  );
};

export default Card;
