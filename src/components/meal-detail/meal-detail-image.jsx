const MealDetailImage = ({ mealDetail }) => {
  const { mealInfo } = mealDetail;

  return (
    <img
      src={mealInfo.imageUrl}
      alt={mealInfo.name}
      className="img-fluid h-75"
    />
  );
};

export default MealDetailImage;
