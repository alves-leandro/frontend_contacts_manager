import { Dispatch, SetStateAction } from "react";
import { CreateContactData, schema } from "./validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { Contact } from "../../pages/Dashboard";
import { Modal } from "../Modal";
import { FormAddContact } from "./styles";
import { StyledButton } from "../../styles/Button";
import { Input } from "../../styles/Input";
import { toast } from "react-toastify";

interface ModalAddContactProps {
  toggleModal: () => void;
  setContacts: Dispatch<SetStateAction<Contact[]>>;
}

export const ModalAddContact = ({
  toggleModal,
  setContacts,
}: ModalAddContactProps) => {
  const { register, handleSubmit } = useForm<CreateContactData>({
    resolver: zodResolver(schema),
  });

  const createContact = async (data: CreateContactData) => {
    try {
      const cleanedData = {
        ...data,
        secondEmail: data.secondEmail || null,
        secondPhone: data.secondPhone || null,
        githubUser: data.githubUser || null,
        linkedinUser: data.linkedinUser || null,
        portifolioUrl: data.portifolioUrl || null,
      };

      const response = await api.post<Contact>("/contact", cleanedData);

      setContacts((previousContact) => [response.data, ...previousContact]);
      toast.success("Contato criado com sucesso!");
      toggleModal();
    } catch (error) {
      toast.error("Erro ao criar o contato");
    }
  };

  return (
    <Modal toggleModal={toggleModal}>
      <FormAddContact onSubmit={handleSubmit(createContact)}>
        <h1>Cadastrar Contato</h1>
        <div className="input-container">
          <div className="left-column">
            <Input
              className="input"
              label="Nome"
              type={"text"}
              placeholder=""
              register={register("name")}
            />

            <Input
              className="input"
              label="Email"
              type={"email"}
              placeholder=""
              register={register("email")}
            />

            <Input
              className="input"
              label="Telefone"
              type={"text"}
              placeholder=""
              register={register("phone")}
            />
          </div>

          <div className="right-column">
            <Input
              className="input"
              label="Segundo Email (opcional)"
              type={"email"}
              placeholder=""
              register={register("secondEmail")}
            />

            <Input
              className="input"
              label="Segundo Telefone (opcional)"
              type={"text"}
              placeholder=""
              register={register("secondPhone")}
            />

            <Input
              className="input"
              label="Github (opcional)"
              type={"text"}
              placeholder=""
              register={register("githubUser")}
            />

            <Input
              className="input"
              label="Linkedin (opcional)"
              type={"text"}
              placeholder=""
              register={register("linkedinUser")}
            />

            <Input
              className="input"
              label="Portifolio (opcional)"
              type={"text"}
              placeholder=""
              register={register("portifolioUrl")}
            />
          </div>
        </div>

        <StyledButton buttonsize="form" buttonstyle="form" type="submit">
          Cadastrar
        </StyledButton>
      </FormAddContact>
    </Modal>
  );
};
