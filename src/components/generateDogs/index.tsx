import "./GenerateDogs.scss";
import { useState, useEffect, FormEvent } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import { FC } from "react";
import { useAppDispatch } from "../../hooks";
import { fetchBreedsThunk, fetchImagesThunk, fetchSubBreedsThunk } from "../../store/slices/dogs/thunks";
import { addDog } from "../../store/slices/dogs/dogsSlice";
import Modal from "../modal/indexs";
import { Idogs } from "../../store/types/dogs";

interface IGenerateDogsProps {
  breeds: string[];
  subBreeds: string[];
  images: string[];
  activeItem: Idogs;
  open: boolean;
  setOpen: (value: boolean) => void;
}

const GenerateDogs: FC<IGenerateDogsProps> = ({ breeds, subBreeds, images, activeItem, open, setOpen }) => {
  const [breed, setBreed] = useState<string>("");
  const [subBreed, setSubBreed] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleChangeBreed = (event: SelectChangeEvent) => {
    setBreed(event.target.value);
    dispatch(fetchSubBreedsThunk(event.target.value));
    dispatch(fetchImagesThunk({ breed: event.target.value, subBreed: "" }));
  };
  const handleChangeSubBreed = (event: SelectChangeEvent) => {
    setSubBreed(event.target.value);
    dispatch(fetchImagesThunk({ breed, subBreed: `/${event.target.value}` }));
  };

  const generateDogs = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (breed) {
      setOpen(true);
      setBreed("");
      setSubBreed("");
      dispatch(addDog({ id: Math.random(), breed, subBreed, images }));
    }
  };

  useEffect(() => {
    dispatch(fetchBreedsThunk());
  }, []);

  return (
    <>
      <form className="generateDogs" onSubmit={generateDogs}>
        <div className="generateDogs__selects">
          <FormControl>
            <Select
              labelId="demo-simple-select-disabled-label"
              id="demo-simple-select-disabled"
              value={breed}
              displayEmpty
              onChange={handleChangeBreed}
            >
              <MenuItem value="">Breeds</MenuItem>
              {breeds?.length > 0 &&
                breeds?.map((item, i) => (
                  <MenuItem key={i} value={item}>
                    {item}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <FormControl>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-disabled"
              value={subBreed}
              displayEmpty
              onChange={handleChangeSubBreed}
            >
              <MenuItem value="">Sub breeds</MenuItem>
              {subBreeds?.length > 0 &&
                subBreeds?.map((item, i) => (
                  <MenuItem key={i} value={item}>
                    {item}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <div className="generateDogs__selects__images">{images?.length} of images</div>
        </div>
        <button className="generateDogs__button" type="submit">
          Generate
        </button>
      </form>
      <Modal open={open} setOpen={setOpen} activeItem={activeItem} />
    </>
  );
};

export default GenerateDogs;
