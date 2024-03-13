import { Helmet } from 'react-helmet';
import Features from "./Features";
import Hero from "./Hero";

const Home = () => {
  return ( 
    <>
      <Helmet>
        <title>Home | Prodassist</title>
        <meta name="description" content="Prodassist Home Page" />
        <link rel="canonical" href="/" />
      </Helmet>
      <Hero />
      <Features />
    </>
   );
}
 
export default Home;