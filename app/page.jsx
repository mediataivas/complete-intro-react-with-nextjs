import Results from "./details/Results";
import AnimalSearch from "./AnimalSearch";
import fetchBreedList from "./details/[petId]/fetchBreedList";
import getAdoptedPetAction from "./getAdoptedPetAction";
import fetchSearch from "./fetchSearch";

export default async function Home({ searchParams }) {
  const { animal, location, breed } = searchParams;

  const results = await fetchSearch({
    queryKey: [
      "search",
      {
        animal: animal ?? "",
        location: location ?? "",
        breed: breed ?? "",
      },
    ],
  });

  const breedList = await fetchBreedList({
    queryKey: ["breeds", searchParams?.animal ?? ""],
  });

  const adoptedPet = await getAdoptedPetAction();

  return (
    <div>
      <main>
        <h1>Home</h1>

        <AnimalSearch
          pets={results?.pets}
          breeds={breedList?.breeds}
          animal={breedList?.animal}
          filters={{
            animal,
            location,
            breed,
          }}
          adoptedPet={adoptedPet}
        />

        <Results pets={results?.pets} />
      </main>
    </div>
  );
}
