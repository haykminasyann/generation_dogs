import "./Images.scss";
import { FC } from "react";

const Images: FC<{ img: string }> = ({ img }) => {
  return (
    <div className="Images">
      <img alt="dogsPhoto" src={img} />
    </div>
  );
};

export default Images;
