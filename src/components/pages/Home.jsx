import Adds from "../layouts/Adds";
import Banner from "../layouts/Banner";
import FeaturedProducts from "../layouts/FeaturedProducts";
import Information from "../layouts/Information";
import NewArrival from "../layouts/NewArrival";
import Newsletter from "../layouts/Newsletter";
import OurBestSeller from "../layouts/OurBestSeller";
import PhoneOfTheYear from "../layouts/PhoneOfTheYear";

const Home = () => {
  return (
    <>
      <Banner />
      <Information />
      <Adds />
      <FeaturedProducts />
      <NewArrival />
      <OurBestSeller />
      <PhoneOfTheYear/>
      <Newsletter />
    </>
  );
};

export default Home;
