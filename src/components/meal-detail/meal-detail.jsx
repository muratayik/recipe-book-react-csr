import MealDetailCategory from "./meal-detail-category";
import MealDetailLinks from "./meal-detail-links";
import MealDetailIngredients from "./meal-detail-ingredients";
import MealDetailImage from "./meal-detail-image";
import MealDetailInstructions from "./meal-detail-instructions";

const MealDetail = ({ mealDetail }) => {
  return (
    <>
      <MealDetailCategory mealDetail={mealDetail} />

      <MealDetailLinks mealDetail={mealDetail} />

      <div class="col">
        <div class="row">
          <div class="col-xs-12 col-md-6 p-3">
            <MealDetailIngredients mealDetail={mealDetail} />
          </div>
          <div class="col-xs-12 col-md-6 p-3">
            <MealDetailImage mealDetail={mealDetail} />
          </div>
        </div>
      </div>

      <MealDetailInstructions mealDetail={mealDetail} />
    </>
  );
};

export default MealDetail;
