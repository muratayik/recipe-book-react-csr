const CardTooltip = ({ children, description, showDescription }) => {
  const showTooltip = showDescription && description?.length > 200;

  if (showTooltip) {
    return (
      <span
        className={`d-inline-block`}
        tabIndex="0"
        data-bs-toggle="tooltip"
        title={description}
      >
        {children}
      </span>
    );
  }

  return <>{children}</>;
};

export default CardTooltip;
