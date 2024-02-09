import FeatureList from "../../components/FeatureList";

const Features = () => {
  return ( 
    <section className="features-section section container">
      <div className="features-content flex">
        <div className="features-section-titles flex">
          <h1 className="features-title section-title">Features</h1>
          <h3 className="features-subtitle section-subtitle">Have a look on what you can do</h3>
        </div>
        <FeatureList />
      </div>
    </section>
   );
}
 
export default Features;