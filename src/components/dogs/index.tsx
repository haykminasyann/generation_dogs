import "./Dogs.scss";
import { FC } from "react";
import { Idogs } from "../../store/types/dogs";
import { useAppDispatch } from "../../hooks";
import { changeActiveItem } from "../../store/slices/dogs/dogsSlice";

interface IdogsProps {
  item: Idogs;
  setOpen: (value: boolean) => void;
}

const Dogs: FC<IdogsProps> = ({ item, setOpen }) => {
  const dispatch = useAppDispatch();

  const openModal = () => {
    setOpen(true);
    dispatch(changeActiveItem(item));
  };
  return (
    <div className="Dogs" onClick={openModal}>
      <div className="Dogs__item">{item?.breed}</div>
      <div className="Dogs__item">{item?.subBreed ? item?.subBreed : "unknown"}</div>
      <div className="Dogs__item">{item?.images?.length}</div>
    </div>
  );
};

export default Dogs;
