import { Link } from "react-router-dom";

import styles from "./index.module.css";
import CardImage from "./card-image";
import CardTitle from "./card-title";
import CardDesription from "./card-desription";
import CardTooltip from "./card-tooltip";
import CardFooter from "./card-footer";

const Card = (props) => {
  const { name, imageUrl, description, linkUrl, showDescription, showFooter } =
    props;

  return (
    <div
      className={`p-1 col-xs-12 col-sm-6 col-md-4 col-lg-3 ${styles.cardItem}`}
    >
      <div className="card h-100">
        <Link to={linkUrl} className={`${styles.cardLink} h-100`}>
          <div className="card-body h-100 p-2">
            <CardTooltip
              description={description}
              showDescription={showDescription}
            >
              <div className="d-flex flex-column h-100">
                <CardImage imageUrl={imageUrl} name={name} />
                <div className="d-flex flex-column flex-grow-1">
                  <CardTitle title={name} />
                  {showDescription && (
                    <CardDesription description={description} />
                  )}
                  {showFooter && <CardFooter />}
                </div>
              </div>
            </CardTooltip>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
