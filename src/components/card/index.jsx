import { Link } from "react-router-dom";

import styles from "./index.module.css";

const Card = (props) => {
  const { name, imageUrl, description, linkUrl } = props;

  const editedDesription =
    description <= 200 ? description : description.substring(0, 200);

  return (
    <div
      className={`p-1 col-xs-12 col-sm-6 col-md-4 col-lg-3 ${styles.cardItem}`}
    >
      <div className="card h-100">
        <Link to={linkUrl} className="h-100">
          <div className="card-body">
            <img src={imageUrl} className="card-img-top" alt={name} />
            <h5 className="card-title text-center py-2">{name}</h5>
            <span
              className="d-inline-block"
              tabIndex="0"
              data-bs-toggle="tooltip"
            >
              <p className="card-text text-muted">{editedDesription}</p>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
