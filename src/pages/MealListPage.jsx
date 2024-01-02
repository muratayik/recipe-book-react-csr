import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as MealActions from "../store/meal/meal.actions";
import * as MealSelectors from "../store/meal/meal.selectors";

import Card from "../components/card";

const MealListPage = () => {
  const { categoryPublicId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MealActions.fetchMealsOfCategory(categoryPublicId));
  }, [categoryPublicId, dispatch]);

  const mealList = useSelector(MealSelectors.selectMealList);
  const isLoading = useSelector(MealSelectors.selectMealIsLoading);
  const error = useSelector(MealSelectors.selectMealError);

  if (isLoading) return <div>Fetching meals...</div>;

  if (error) return <div>An error occurred: {error.message}</div>;

  const mealListWithLinkUrl = mealList.map((meal) => ({
    ...meal,
    linkUrl: `/${meal.publicId}/details`,
  }));

  return (
    <div className="row">
      {mealListWithLinkUrl.map((meal) => (
        <Card
          key={meal.id}
          {...meal}
          showDescription={false}
          showFooter={true}
        />
      ))}
    </div>
  );
};

export default MealListPage;
