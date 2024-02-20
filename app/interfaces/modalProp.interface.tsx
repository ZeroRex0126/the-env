export interface modelPropInterface {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  openModal: () => void;
}

export interface openContactModelInterface {
  openModal: () => void;
}

export interface modelContents {
  name: string;
  email: string;
  message: string;
}
