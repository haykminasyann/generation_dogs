import { Modal as MuiModal } from "@mui/material";
import { FC } from "react";
import { Idogs } from "../../store/types/dogs";
import Images from "./components";
import "./Modal.scss";

interface ImodalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  activeItem: Idogs;
}

const Modal: FC<ImodalProps> = ({ open, setOpen, activeItem }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <MuiModal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <div className="Modal">{activeItem?.images && activeItem?.images?.map((img, i) => <Images key={i} img={img} />)}</div>
    </MuiModal>
  );
};

export default Modal;
