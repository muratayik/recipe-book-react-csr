import { useDispatch, useSelector } from "react-redux";

import * as FavoriteSelectors from "../../store/favorite/favorite.selectors";
import * as FavoriteActions from "../../store/favorite/favorite.actions";

import styles from "./card-footer.module.css";

const CardFooter = ({ publicId }) => {
  const dispatch = useDispatch();

  const isInFavorites = useSelector((state) =>
    FavoriteSelectors.isInFavorites(state, publicId)
  );

  const addToFavorites = () => {
    dispatch(FavoriteActions.addToFavorites(publicId));
  };

  const removeFromFavorites = () => {
    dispatch(FavoriteActions.removeFromFavorites(publicId));
  };

  return (
    <div
      className={`card-footer d-flex justify-content-end mt-auto ${styles.favorite}`}
    >
      {isInFavorites ? (
        <>
          <span
            className={`d-inline-block ${styles.favoriteIcon}`}
            tabIndex="0"
            data-bs-toggle="tooltip"
            title="Remove From Favorites"
            onClick={removeFromFavorites}
          >
            <i className="fa fa-heart fa-2x" aria-hidden></i>
          </span>
        </>
      ) : (
        <>
          <span
            className={`d-inline-block ${styles.favoriteIcon}`}
            tabIndex="0"
            data-bs-toggle="tooltip"
            title="Add To Favorites"
            onClick={addToFavorites}
          >
            <i className="far fa-heart fa-2x" aria-hidden></i>
          </span>
        </>
      )}
    </div>
  );
};

export default CardFooter;
