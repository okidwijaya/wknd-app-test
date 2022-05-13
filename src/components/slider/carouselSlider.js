import React, { useEffect, useState } from "react";
import Flickity from "react-flickity-component";
import { getTestimonial } from "../../utils/getData";
import TestimonialCard from "../card/TestimonialCard";

export const CarouselSlider = (props) => {
  const [testData, setDataTestimonial] = useState([]);

  let flkty;
  let [carouselIndex, setCarouselIndex] = useState(null);

  useEffect(() => {
    getTestimonial()
      .then((res) => {
        setDataTestimonial(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleChange = (index) => {
    setCarouselIndex(index); // Not working
    console.log({ carouselIndex, index });
  };

  useEffect(() => {
    if (flkty) {
      console.log("this ran");
      flkty.on("settle", () => {
        console.log(`current index is ${flkty.selectedIndex}`);
      });

      flkty.on("change", (index) => {
        handleChange(index);
      });
    }
  }, [carouselIndex]);

  return (
    <>
      <div className="testimonialCardContainer">
        <p className="testimonialcontainerTitle">Testimonial</p>
        <Flickity
          flickityRef={(c) => (flkty = c)}
          options={{
            initialIndex: props.initialIndex,
            freeScroll: true,
            draggable: true,
            contain: true,
            // prevNextButtons: false,
            pageDots: false,
          }}
        >
          {testData.map((data, idx) => {
            return (
              <TestimonialCard
                key={idx}
                title={data.by}
                post={data.testimony}
              />
            );
          })}
        </Flickity>
      </div>
    </>
  );
};
