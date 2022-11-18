import { selectorDogs } from "../../store/selectors";
import GenerateDogs from "../../components/generateDogs";
import { FC, useState } from "react";
import { useAppSelector } from "../../hooks";
import { lazy, Suspense } from "react";
import "./Home.scss";
const LazyDogs = lazy(() => import("../../components/dogs"));

const Home: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { dogs, activeItem, breeds, subBreeds, images } = useAppSelector(selectorDogs);

  return (
    <div className="Home">
      <div className="Home__container">
        {dogs?.length > 0 &&
          dogs?.map((item) => (
            <Suspense fallback={null} key={item.id}>
              <LazyDogs item={item} setOpen={setOpen} />
            </Suspense>
          ))}
        <GenerateDogs
          breeds={breeds}
          subBreeds={subBreeds}
          images={images}
          activeItem={activeItem}
          open={open}
          setOpen={setOpen}
        />
      </div>
    </div>
  );
};

export default Home;
