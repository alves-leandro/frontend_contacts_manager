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
  const [modalContact, setModalContact] = useState<Contact | undefined>(undefined);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await api.get<Contact[]>("contact");
        setContacts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchContacts();
  }, []);

  const toggleModal = (contact?: Contact) => {
    setIsOpenModal(!isOpenModal);
    setModalContact(contact);
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
          <ModalAddContact toggleModal={toggleModal} setContacts={setContacts} />
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
            <Card key={contact.id} contact={contact} onEdit={toggleModal} />
          ))}
        </ul>
      </DashMainPageStyled>
    </>
  );
};
