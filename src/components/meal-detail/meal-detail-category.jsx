const MealDetailCategory = ({ mealDetail }) => {
  const { categoryInfo, mealInfo } = mealDetail;

  return (
    <h3 className="text-center py-2">
      {`${categoryInfo.name} -> ${mealInfo.name}`}
    </h3>
  );
};

export default MealDetailCategory;
