import React from "react";

interface ModalContextProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedProject: {
    title: string;
    img: string;
    description: string;
    skill: Array<string>;
    icon: Array<string>;
    repository: string;
    deploy: string;
    createdAt: string;
  } | null;
  setSelectedProject: React.Dispatch<
    React.SetStateAction<{
      title: string;
      img: string;
      description: string;
      skill: Array<string>;
      icon: Array<string>;
      repository: string;
      deploy: string;
      createdAt: string;
    } | null>
  >;
}

const ModalContext = React.createContext<ModalContextProps | null>(null);

export const useModal = () => {
  const context = React.useContext(ModalContext);

  if (!context) {
    throw new Error("useModal deve estar dentro do ModalContextProvider");
  }

  return context;
};

export const ModalContextProvider = ({ children }: React.PropsWithChildren) => {
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [selectedProject, setSelectedProject] = React.useState<{
    title: string;
    img: string;
    description: string;
    skill: Array<string>;
    icon: Array<string>;
    repository: string;
    deploy: string;
    createdAt: string;
  } | null>(null);

  return (
    <ModalContext.Provider
      value={{ openModal, setOpenModal, selectedProject, setSelectedProject }}
    >
      {children}
    </ModalContext.Provider>
  );
};
