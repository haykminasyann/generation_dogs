import React from "react";
import withCounter from "../../hoc/withCounter";
import { FC } from "react";

interface IGenerateDogsProps {
  count: number;
  incrementCount: any;
}
const Counter: FC<IGenerateDogsProps> = ({ count = 0, incrementCount }) => {
  return (
    <button className="generateDogs__button" onClick={incrementCount}>
      Clicked {count} times HOC Example
    </button>
  );
};
export default withCounter(Counter);
