const CardDesription = ({ description }) => {
  const editedDesription =
    description.length <= 200
      ? description
      : description.substring(0, 200) + "...";

  return <p className="card-text text-muted">{editedDesription}</p>;
};

export default CardDesription;
