import { useSelector } from "react-redux";

import * as FavoriteSelectors from "../store/favorite/favorite.selectors";

import Card from "../components/card";

const FavoritePage = () => {
  const favorites = useSelector(FavoriteSelectors.selectFavorites);

  const favoriteListWithLinkUrl = favorites.map((favorite) => ({
    ...favorite,
    linkUrl: `/${favorite.publicId}/details`,
  }));

  return (
    <>
      {favorites.length > 0 ? (
        <div className="row">
          {favoriteListWithLinkUrl.map((favorite) => (
            <Card
              key={favorite.id}
              {...favorite}
              showDescription={false}
              showFooter={true}
            />
          ))}
        </div>
      ) : (
        <span>You have no meal added to your favorites</span>
      )}
    </>
  );
};

export default FavoritePage;
