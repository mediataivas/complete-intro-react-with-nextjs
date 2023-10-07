const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

import { cookies } from "next/headers";

const AnimalSearch = ({ pets, breeds, filters, adoptedPet }) => {
  return (
    <div className="search-params">
      <form>
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input
            id="location"
            name="location"
            placeholder="Location"
            defaultValue={filters?.location}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select id="animal" name="animal" defaultValue={filters?.animal}>
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds || !breeds.length}
            id="breed"
            name="breed"
            defaultValue={filters?.breed}
          >
            <option />
            {breeds?.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default AnimalSearch;
