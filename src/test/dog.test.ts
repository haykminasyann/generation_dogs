import { expect } from "@jest/globals";
const breedName = "hound";
const subBreed = "afghan";
describe("dogss", () => {
  it("breedsAll success", async () => {
    const data = await fetch("https://dog.ceo/api/breeds/list/all");
    const response = await data.json();
    expect(response.status).toBe("success");
  });
  it("breedsAll null", async () => {
    const data = await fetch("https://dog.ceo/api/breeds/list/all");
    const response = await data.json();
    expect(response).not.toBe(null);
  });
  it("breedsAll undefined", async () => {
    const data = await fetch("https://dog.ceo/api/breeds/list/all");
    const response = await data.json();
    expect(response).not.toBe(undefined);
  });
  it("breeds success", async () => {
    const data = await fetch(`https://dog.ceo/api/breed/${breedName}/list`);
    const response = await data.json();
    expect(response.status).toBe("success");
  });
  it("breeds list undefined", async () => {
    const data = await fetch(`https://dog.ceo/api/breed/${breedName}/list`);
    const response = await data.json();
    expect(response).not.toBe(undefined);
  });
  it("breeds list null", async () => {
    const data = await fetch(`https://dog.ceo/api/breed/${breedName}/list`);
    const response = await data.json();
    expect(response).not.toBe(null);
  });
  it("images success", async () => {
    const data = await fetch(`https://dog.ceo/api/breed/${breedName}/${subBreed}/images`);
    const response = await data.json();
    expect(response.status).toBe("success");
  });
  it("images list undefined", async () => {
    const data = await fetch(`https://dog.ceo/api/breed/${breedName}/${subBreed}/images`);
    const response = await data.json();
    expect(response).not.toBe(undefined);
  });
  it("images list null", async () => {
    const data = await fetch(`https://dog.ceo/api/breed/${breedName}/${subBreed}/images`);
    const response = await data.json();
    expect(response).not.toBe(null);
  });
});