import Carousel from "../components/Carousel";
import Categories from "../components/Categories";

import med from "../images/banner1.png";

const Home = () => {
  return (
    <div>
      <Carousel medimg={med} />
      {/* <Section1 /> */}
      <Categories />
    </div>
  );
};

export default Home;
