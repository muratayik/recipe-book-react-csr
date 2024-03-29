const MealDetailLinks = ({ mealDetail }) => {
  const { mealInfo } = mealDetail;

  return (
    <>
      <div className="col">
        <span>
          <h5 className="d-inline-flex px-2">Source :</h5>
          <a href={mealInfo.sourceUrl} target="_blank" rel="noreferrer">
            {mealInfo.sourceUrl}
          </a>
        </span>
      </div>

      <div className="col">
        <span>
          <h5 className="d-inline-flex px-2">Youtube :</h5>
          <a href={mealInfo.youtubeUrl} target="_blank" rel="noreferrer">
            {mealInfo.youtubeUrl}
          </a>
        </span>
      </div>
    </>
  );
};

export default MealDetailLinks;
