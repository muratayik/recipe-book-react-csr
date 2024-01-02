import styles from "./card-footer.module.css";

const CardFooter = () => {
  return (
    <div
      className={`card-footer d-flex justify-content-end mt-auto ${styles.favorite}`}
    >
      <span
        className="d-inline-block"
        tabIndex="0"
        data-bs-toggle="tooltip"
        title="Add To Favorites"
      >
        Add to Favorites
      </span>
    </div>
  );
};

export default CardFooter;
