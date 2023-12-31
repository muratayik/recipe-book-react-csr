import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import { retrieveMealsOfCategory } from "../utils/api.utils";
import Card from "../components/card";

const MealListPage = () => {
  const { categoryPublidId } = useParams();

  const {
    isPending,
    error,
    data: meals,
  } = useQuery({
    queryKey: ["mealsOfCategory", categoryPublidId],
    queryFn: () => retrieveMealsOfCategory(categoryPublidId),
  });

  if (isPending) return <div>Fetching meals...</div>;

  if (error) return <div>An error occurred: {error.message}</div>;

  const mealListWithLinkUrl = meals.map((meal) => ({
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
