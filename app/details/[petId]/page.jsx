import fetchPet from "./fetchPet";
import Details from "./Details";

export default async function DetailsPage({ params, searchParams }) {
  const petDetails = await fetchPet({
    queryKey: ["details", params.petId],
  });

  return (
    <Details
      pet={petDetails}
      activeImageIndex={searchParams?.index ?? 0}
      showAdoptModal={searchParams?.showAdoptModal}
    />
  );
}
