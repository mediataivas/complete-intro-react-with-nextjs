import Link from "next/link";

const Carousel = ({
  petId,
  activeIndex,
  images = ["http://pets-images.dev-apis.com/pets/none.jpg"],
}) => {
  return (
    <div className="carousel">
      <img src={images[activeIndex]} alt="animal" />
      <div className="carousel-smaller">
        {images.map((photo, index) => (
          <Link
            href={`/details/${petId}?index=${index}`}
            key={photo}
            data-index={index}
            replace={true}
          >
            <img
              key={photo}
              src={photo}
              className={activeIndex === String(index) ? "active" : ""}
              alt="animal thumbnail"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
