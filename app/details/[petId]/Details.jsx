import Modal from "./Modal";
import Carousel from "./Carousel";
import Link from "next/link";
import adoptPetAction from "./adoptPetAction";

const Details = ({ pet, activeImageIndex, showAdoptModal }) => {
  const adoptPet = adoptPetAction.bind(null, pet);

  return (
    <div>
      <div className="details">
        <Carousel
          images={pet.images}
          petId={pet.id}
          activeIndex={activeImageIndex}
        />
        <div>
          <h1>{pet.name}</h1>
          <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>

          <Link href={`/details/${pet.id}?showAdoptModal=true`} className="pet">
            <button>Adopt {pet.name}</button>
          </Link>

          <p>{pet.description}</p>
        </div>
      </div>
      {showAdoptModal ? (
        <Modal>
          <div>
            <form action={adoptPet}>
              <div>
                <h1>Would you like to adopt {pet.name}?</h1>
                <div className="buttons">
                  <button type="submit">Yes</button>

                  <Link href={`/details/${pet.id}`}>No</Link>
                </div>
              </div>
            </form>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default Details;
