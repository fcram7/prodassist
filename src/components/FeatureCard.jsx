import PropTypes from "prop-types";

const FeatureCard = ({ icon, title, description }) => {
  return ( 
    <div className="feature-list-card">
      <div className="feature-list-card-content flex">
        <div className="feature-list-card-logo">
          {icon}
        </div>

        <h2 className="feature-list-card-title">
          {title}
        </h2>

        <p className="feature-list-card-description">
          {description}
        </p>
      </div>
    </div>
   );
}
 
FeatureCard.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}


export default FeatureCard;
