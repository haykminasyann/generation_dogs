
export interface IinitialDogs {
    dogs: Idogs[],
    activeItem: Idogs,
    breeds: string[],
    subBreeds: string[],
    images: string[],
    loading: boolean,
    error: string | undefined
}

export interface Idogs {
    id?: number,
    breed?: string,
    subBreed?: string,
    images?: string[],
}