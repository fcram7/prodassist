import HeroImg from "../../assets/hero-img.png";

const Hero = () => {
  return ( 
    <section className="hero-section container">
      <div className="hero-content grid">
        <div className="hero-left flex">
          <h2>
            Welcome to Prodassist! Your trusty assistant for productivity
          </h2>
          <div className="try-now-button">
            <a href="#">Try now</a>
          </div>
        </div>
        <div className="hero-right">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </section>
   );
}
 
export default Hero;