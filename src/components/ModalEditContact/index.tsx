import { Dispatch, SetStateAction, useState } from "react";
import { UpdateContactData, schema } from "./validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { Contact } from "../../pages/Dashboard";
import { Modal } from "../Modal";
import { FormEditContact } from "./styles";
import { StyledButton } from "../../styles/Button";
import { Input } from "../../styles/Input";
import { toast } from "react-toastify";

interface ModalEditContactProps {
  contact: Contact;
  toggleModal: () => void;
  setContacts: Dispatch<SetStateAction<Contact[]>>;
}

export const ModalEditContact = ({
  contact,
  toggleModal,
  setContacts,
}: ModalEditContactProps) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const { register, handleSubmit } = useForm<UpdateContactData>({
    resolver: zodResolver(schema),
    defaultValues: contact,
  });

  const updateContact = async (data: UpdateContactData) => {
    try {
      setIsUpdating(true);
      const response = await api.patch<Contact>(`/contact/${contact.id}`, data);
      setContacts((previousContacts) => {
        const updatedContacts = previousContacts.map((c) => {
          if (c.id === response.data.id) {
            return response.data;
          }
          return c;
        });
        return updatedContacts;
      });
      setIsUpdating(false);
      toast.success("Contato editado com sucesso!");
      toggleModal();
    } catch (error) {
      setIsUpdating(false);
    }
  };

  const deleteContact = async () => {
    try {
      await api.delete(`/contact/${contact.id}`);
      setContacts((previousContacts) =>
        previousContacts.filter((c) => c.id !== contact.id)
      );
      toast.success("Contato removido com sucesso!");
      toggleModal();
    } catch (error) {
      toast.error("Erro ao remover o contato");
    }
  };

  return (
    <Modal toggleModal={toggleModal}>
      <FormEditContact onSubmit={handleSubmit(updateContact)}>
        <h1>Editar Contato</h1>
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

        <StyledButton
          buttonsize="form"
          buttonstyle="form"
          type="submit"
          disabled={isUpdating}
        >
          Atualizar
        </StyledButton>

        <StyledButton
          buttonsize="form"
          buttonstyle="form"
          onClick={deleteContact}
        >
          Excluir
        </StyledButton>
      </FormEditContact>
    </Modal>
  );
};
