import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import * as MealActions from "../store/meal/meal.actions";
import * as MealSelectors from "../store/meal/meal.selectors";

import MealDetail from "../components/meal-detail/meal-detail";

const MealDetailPage = () => {
  const { mealPublicId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MealActions.fetchMealDetail(mealPublicId));
  }, [dispatch, mealPublicId]);

  const mealDetail = useSelector(MealSelectors.selectMealDetail);
  const isLoading = useSelector(MealSelectors.selectMealIsLoading);
  const error = useSelector(MealSelectors.selectMealError);

  if (isLoading) return <div>Fetching meal detail...</div>;

  if (error) return <div>An error occurred: {error.message}</div>;

  return <>{mealDetail && <MealDetail mealDetail={mealDetail} />}</>;
};

export default MealDetailPage;
