import { FC } from "react";
import S from "./modal-styled";
import { ModalProps } from "../../../types/propsType";

const ModalContainer: FC<ModalProps> = (props) => {
  //constants
  const { open, onClose, children, customStyles } = props;

  return (
    <S.ModalContainer open={open} customStyles={customStyles} onClose={onClose}>
      {children}
    </S.ModalContainer>
  );
};

export default ModalContainer;
