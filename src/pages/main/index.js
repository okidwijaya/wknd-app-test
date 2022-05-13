import React from "react";
import { Layout } from "../../components";
import BottomSection from "../../components/main/BottomSection";
import TopSection from "../../components/main/TopSection";
import { CarouselSlider } from "../../components/slider/carouselSlider";
// import SliderTestimonial from "../../components/slider/sliderTestimonial";
// CarouselSlider

const Home = () => {
  return (
    <>
      <Layout>
        <div className="wrapper">
          <TopSection />
        </div>
        <div className="cardTestimonialWrapper">
          <CarouselSlider initialIndex={3} />
        </div>

        {/* <SliderTestimonial /> */}
        <BottomSection />
      </Layout>
    </>
  );
};

export default Home;
