export interface modelPropInterface {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  toggleModal?: (messageProp?: messageProp) => void;
  openModal: (state?: boolean) => void;
}

export interface openContactModelInterface {
  openModal: () => void;
}

export interface messageModalPropInterface {
  showMessage: boolean;
  messageProp: messageProp;
  toggleModal: (messageProp?: messageProp) => void;
}

export interface messageProp {
  btnMessage: string;
  message: string;
  icon: string;
}
