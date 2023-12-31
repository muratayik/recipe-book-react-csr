const MealDetailIngredients = ({ mealDetail }) => {
  const { ingredients } = mealDetail;

  return (
    <ul>
      {ingredients.map((ing) => (
        <li>{`${ing.amount} - ${ing.name}`}</li>
      ))}
    </ul>
  );
};

export default MealDetailIngredients;
