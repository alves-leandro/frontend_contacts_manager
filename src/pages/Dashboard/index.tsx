import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Card from "../../components/Card";
import { ModalAddContact } from "../../components/ModalAddContact";
import { ModalEditContact } from "../../components/ModalEditContact";
import { DashHeaderStyled, DashMainPageStyled } from "./style";
import { StyledButton } from "../../styles/Button";

export interface Contact {
  id: string;
  name: string;
  email: string;
  secondEmail: string;
  phone: string;
  secondPhone: string;
  githubUser: string;
  linkedinUser: string;
  portifolioUrl: string;
}

export const Dashboard = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalContact, setModalContact] = useState<Contact | undefined>(
    undefined
  );

  useEffect(() => {
    (async () => {
      const response = await api.get<Contact[]>("contact");

      setContacts(response.data);
    })();
  }, []);

  const toggleModal = (contact?: Contact) => {
    setIsOpenModal(!isOpenModal);
    setModalContact(contact);
  };

  const onDelete = async (id: string) => {
    try {
      await api.delete(`/contact/${id}`);
      setContacts((previousContacts) =>
        previousContacts.filter((contact) => contact.id !== id)
      );
    } catch (error) {
      console.log("Erro ao excluir o contato:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("contact-manager:token");
    window.location.href = "/";
  };

  return (
    <>
      <DashHeaderStyled>
        <StyledButton
          buttonsize="medium"
          buttonstyle="form"
          type="button"
          onClick={() => toggleModal()}
        >
          Novo
        </StyledButton>
        <StyledButton
          buttonsize="medium"
          buttonstyle="form"
          type="button"
          onClick={handleLogout}
        >
          Logout
        </StyledButton>
      </DashHeaderStyled>

      <DashMainPageStyled>
        {isOpenModal && !modalContact && (
          <ModalAddContact
            toggleModal={toggleModal}
            setContacts={setContacts}
          />
        )}

        {modalContact && (
          <ModalEditContact
            contact={modalContact}
            toggleModal={toggleModal}
            setContacts={setContacts}
          />
        )}

        <ul>
          {contacts.map((contact) => (
            <Card
              key={contact.id}
              contact={contact}
              onEdit={toggleModal}
            />
          ))}
        </ul>
      </DashMainPageStyled>
    </>
  );
};
