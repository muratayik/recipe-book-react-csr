import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { retrieveMealDetail } from "../utils/api.utils";
import MealDetail from "../components/meal-detail/meal-detail";

const MealDetailPage = () => {
  const { mealPublicId } = useParams();

  const {
    isPending,
    error,
    data: mealDetail,
  } = useQuery({
    queryKey: ["mealDetail", mealPublicId],
    queryFn: () => retrieveMealDetail(mealPublicId),
  });

  if (isPending) return <div>Fetching meal detail...</div>;

  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <>
      <MealDetail mealDetail={mealDetail} />
    </>
  );
};

export default MealDetailPage;
