const MealDetailInstructions = ({ mealDetail }) => {
  const { instructions } = mealDetail;

  return (
    <>
      <h4>Instructions</h4>
      {instructions.map((ins) => (
        <p>{ins.step}</p>
      ))}
    </>
  );
};

export default MealDetailInstructions;
