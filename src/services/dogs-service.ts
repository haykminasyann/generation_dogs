import { FETCH_BREEDS, FETCH_SUB_BREEDS, FETCH_IMAGES } from '../urls/dogs';
import AxiosInstance from "../utils/Instance";

export const fetchBreeds = () => AxiosInstance.get(FETCH_BREEDS)
export const fetchSubBreeds = (breed: string) => AxiosInstance(FETCH_SUB_BREEDS(breed))
export const fetchImages = (breed: string, subBreed: string) => AxiosInstance(FETCH_IMAGES(breed, subBreed))
