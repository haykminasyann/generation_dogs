export const FETCH_BREEDS = "/breeds/list/all";
export const FETCH_SUB_BREEDS = (breed: string): string => `/breed/${breed}/list`;
export const FETCH_IMAGES = (breed: string, subBreed: string): string => `/breed/${breed}${subBreed}/images`;